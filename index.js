import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
const app = express();

const port = process.env.PORT || 4000;

app.use("/static", express.static("dist"));

app.use("/", (req, res) => {
  res.send("<h1>Hello InstaFood lovers!</h1>");
});

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
