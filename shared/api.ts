// @ts-ignore
const test = process.env.NODE_ENV === "test";
export const apiURL = test ? "http://localhost:5138" : "/api";

import type { User, RegisterData, LoginData } from "./types";

/**
 * Fetches the status of the server or throws an error
 * @returns {Promise<{ status: string }>} The status of the server
 */
export async function getStatus(): Promise<{ status: string }> {
  const res = await fetch(`${apiURL}/status`);

  if (res.status !== 200) throw new Error("Failed to fetch status");

  return (await res.json()) as { status: string };
}

/**
 * Registers a new user or throws an error
 * @param {RegisterData} data The data to register with
 * @returns {Promise<string>} The message from the server
 * @throws {Error} If the registration fails
 */
export async function register(data: RegisterData): Promise<string> {
  const res = await fetch(`${apiURL}/auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  if (res.status !== 200) {
    const data = (await res.json()) as { error: string };
    throw new Error(data.error);
  }

  const d = (await res.json()) as { message: string };

  return d.message;
}

/**
 * Logs in a user or throws an error
 * @param {LoginData} data The data to login with
 * @returns {Promise<string>} The JWT token from the server
 * @throws {Error} If the login fails
 */
export async function login(data: LoginData): Promise<string> {
  const res = await fetch(`${apiURL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ data }),
  });

  if (res.status !== 200) {
    const data = (await res.json()) as { error: string };
    throw new Error(data.error);
  }

  const d = (await res.json()) as { token: string };

  return d.token;
}

/**
 * Authenticates the user or throws an error
 * @param {string} token The JWT token to authenticate with
 * @returns {Promise<User>} The user data from the server
 * @throws {Error} If the authentication fails
 */
export async function authenticate(token: string): Promise<User> {
  const res = await fetch(`${apiURL}/auth/`, {
    headers: { Authorization: `Bearer ${token}` },
  });

  if (res.status !== 200) {
    const data = (await res.json()) as { error: string };
    throw new Error(data.error);
  }

  const d = (await res.json()) as { user: User };

  return d.user;
}
