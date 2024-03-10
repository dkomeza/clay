import express from "express";

import { authRouter, spacesRouter } from "@routes";

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.json());
app.use("/auth", authRouter);
app.use("/spaces", spacesRouter);

app.get("/status", (req, res) => {
  res.send({ status: "ok" });
});

const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
