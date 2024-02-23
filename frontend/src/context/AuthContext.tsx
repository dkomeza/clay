import React, { ReactNode, useContext, useEffect, useState } from "react";

import type { User, LoginData, RegisterData } from "@shared/types";
import { authenticate, login, register } from "@shared/api";

interface AuthProvider {
  user: User | null;
  logIn: (data: LoginData) => Promise<void>;
  signUp: (data: RegisterData) => Promise<void>;
  logout: () => void;
}

export const AuthContext = React.createContext({} as AuthProvider);

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      setLoading(false);
      return;
    }

    authenticate(token)
      .then((user) => {
        setUser(user);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  }, []);

  const logIn = async (data: LoginData) => {
    try {
      const token = await login(data);
      localStorage.setItem("token", token);

      const user = await authenticate(token);
      setUser(user);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const signUp = async (data: RegisterData) => {
    try {
      await register(data);
    } catch (error: any) {
      console.error(error.message);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    setUser(null);
  };

  const value = {
    user,
    logIn,
    signUp,
    logout,
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
};
