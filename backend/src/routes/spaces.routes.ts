import { auth } from "@/middlewares/auth.middleware";
import { getSpaces } from "@/services/spaces.service";
import express from "express";

const spacesRouter = express.Router();

spacesRouter.get("/", auth, (req, res) => {
  const user = req.user;

  if (!user) {
    return res.status(400).send({ error: "User not found" });
  }

  console.log(user.id);

  const spaces = getSpaces(user.id);

  res.send({ spaces });
});

export default spacesRouter;
