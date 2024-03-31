import express from "express";
import dotenv from "dotenv";
dotenv.config({
  path: "./.env",
});
const app = express();

const port = process.env.PORT || 4000;

app.use(express.static("dist"));

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
