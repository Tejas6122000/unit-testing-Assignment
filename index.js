const express = require("express");
const authMiddleware = require("./middleware/authMiddleware");

const app = express();

app.use(express.json());

app.use(authMiddleware);

app.get("/private", (req, res) => {
  res.status(200).json({ message: "This is private" });
});

app.get("/public", (req, res) => {
  res.status(200).json({message: "This is a public" });
});

app.listen(8000, () => console.log("Server Started Successfully"));

module.exports = app;
