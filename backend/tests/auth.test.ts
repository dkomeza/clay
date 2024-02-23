import { expect, describe, test, beforeEach } from "bun:test";

import "../src/index";

import { authenticate, login, register } from "@shared/api";
import type { RegisterData } from "@shared/types";

import { databaseCleanup } from "./utils";

beforeEach(async () => {
  await databaseCleanup();
});

describe("Register", () => {
  test("User can register", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    const message = await register(data);

    expect(message).toBe("User registered successfully");
  });

  test("User cannot register with the same email", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    const newData: RegisterData = {
      email: "admin@admin.com",
      username: "admin2",
      password: "admin2",
    };

    await register(data);

    try {
      await register(newData);
    } catch (error: any) {
      expect(error.message).toBe("Email is already taken");
    }
  });

  test("User cannot register with the same username", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    const newData: RegisterData = {
      email: "admin2@admin.com",
      username: "admin",
      password: "admin2",
    };

    await register(data);

    try {
      await register(newData);
    } catch (error: any) {
      expect(error.message).toBe("Username is already taken");
    }
  });

  test("User cannot register with invalid data", async () => {
    const data: RegisterData = {
      email: "",
      username: "",
      password: "",
    };

    try {
      await register(data);
    } catch (error: any) {
      expect(error.message).toBe("Invalid data");
    }
  });
});

describe("Login", () => {
  test("User can login using username", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    await register(data);

    const token = await login({
      emailOrUsername: "admin",
      password: "admin",
    });

    expect(token).toBeString();
  });

  test("User can login using email", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    await register(data);

    const token = await login({
      emailOrUsername: "admin@admin.com",
      password: "admin",
    });

    expect(token).toBeString();
  });

  test("User cannot login with wrong username", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    await register(data);

    try {
      await login({
        emailOrUsername: "admin@admin.comasdf",
        password: "admin",
      });
    } catch (error: any) {
      expect(error.message).toBe("Wrong username or password");
    }
  });

  test("User cannot login with wrong password", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    await register(data);

    try {
      await login({
        emailOrUsername: "admin@admin.com",
        password: "asfsadf",
      });
    } catch (error: any) {
      expect(error.message).toBe("Wrong username or password");
    }
  });

  test("User cannot login with missing data", async () => {
    try {
      await login({
        emailOrUsername: "",
        password: "",
      });
    } catch (error: any) {
      expect(error.message).toBe("Invalid data");
    }
  });
});

describe("Authentication", () => {
  test("User can get user data", async () => {
    const data: RegisterData = {
      email: "admin@admin.com",
      username: "admin",
      password: "admin",
    };

    await register(data);

    const token = await login({
      emailOrUsername: "admin",
      password: "admin",
    });

    const user = await authenticate(token);

    expect(user).toBeDefined();
    expect(user.email).toBe(data.email);
  });
});
