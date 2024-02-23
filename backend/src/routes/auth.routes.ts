import { auth } from "@/middlewares/auth.middleware";
import { login, register } from "@/services/auth.service";
import type { LoginData, RegisterData } from "@shared/types";
import express from "express";

const authRouter = express.Router();

authRouter.post("/register", async (req, res) => {
  const { data } = req.body as { data: RegisterData };

  if (!data || !data.email || !data.username || !data.password) {
    return res.status(400).send({ error: "Invalid data" });
  }

  try {
    await register(data);

    return res.send({ message: "User registered successfully" });
  } catch (error: any) {
    return res.status(400).send({ error: error.message });
  }
});

authRouter.post("/login", async (req, res) => {
  const { data } = req.body as { data: LoginData };

  if (!data || !data.emailOrUsername || !data.password) {
    return res.status(400).send({ error: "Invalid data" });
  }

  try {
    const token = await login(data);

    return res.send({ token });
  } catch (error: any) {
    return res.status(400).send({ error: error.message });
  }
});

authRouter.get("/", auth, (req, res) => {
  const user = req.user;

  res.send({ user });
});

export default authRouter;
