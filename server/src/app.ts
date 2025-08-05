import express from "express";

const app = express();

app.get("/", (_, res) => {
  res.status(200).json({ message: "Hello from Express!" });
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
