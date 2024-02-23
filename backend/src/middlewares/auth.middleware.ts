import { getUser } from "@/models/user.model";
import type { User } from "@shared/types";
import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

declare global {
  namespace Express {
    interface Request {
      user: User | null;
    }
  }
}

export const auth = async (req: Request, res: Response, next: NextFunction) => {
  const bearer = req.headers.authorization;

  if (!bearer) {
    return res.status(401).send({ error: "Unauthorized" });
  }

  const token = bearer.split(" ")[1];

  if (!token || typeof token !== "string") {
    return res.status(401).send({ error: "Unauthorized" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || "") as {
      id: string;
    };
  
    req.user = await getUser({ id: decoded.id });
  
    next();
  } catch (error: any) {
    return res.status(401).send({ error: "Unauthorized" });
  }
};
