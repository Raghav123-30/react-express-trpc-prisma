import express from "express";
import cors from "cors";
import { createExpressMiddleware } from "@trpc/server/adapters/express";
import { appRouter } from "./router/index.js";

const app = express();
app.use(cors({ origin: "http://localhost:5173/" }));

app.get("/", (_, res) => {
  res.status(200).json({ message: "Hello from Express!" });
});

app.use("/trpc", createExpressMiddleware({ router: appRouter }));

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
