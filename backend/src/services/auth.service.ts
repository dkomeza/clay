import type { User, RegisterData, LoginData } from "@shared/types";
import jwt from "jsonwebtoken";

import { createUser, getUser } from "@/models/user.model";

export async function register(data: RegisterData): Promise<User> {
  const isUsernameTaken = await getUser({ username: data.username });
  const isEmailTaken = await getUser({ email: data.email });

  if (isUsernameTaken) {
    throw new Error("Username is already taken");
  }

  if (isEmailTaken) {
    throw new Error("Email is already taken");
  }

  const hashedPassword = Bun.password.hashSync(data.password, {
    algorithm: "bcrypt",
    cost: 10,
  });

  const rawUser = await createUser({
    email: data.email,
    username: data.username,
    password: hashedPassword,
  });

  const user = {
    id: rawUser.id,
    email: rawUser.email,
    username: rawUser.username,
  };

  return user;
}

export async function login(data: LoginData): Promise<string> {
  const user = await getUser({
    OR: [{ email: data.emailOrUsername }, { username: data.emailOrUsername }],
  });

  if (!user) {
    throw new Error("Wrong username or password");
  }

  const isPasswordCorrect = Bun.password.verifySync(
    data.password,
    user.password
  );

  if (!isPasswordCorrect) {
    throw new Error("Wrong username or password");
  }

  const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET || "", {
    expiresIn: data.rememberMe ? "7d" : "1d",
  });

  return token;
}
