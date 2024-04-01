import express from "express";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CORS_ORIGIN,
  })
);
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use("/static", express.static("public"));

//routes import
import restaurantRouter from "./routes/restaurant.routes.js";
import menuRouter from "./routes/menu.routes.js";

app.use("/api/restaurants", restaurantRouter);
app.use("/api/menu", menuRouter);

app.use("/", (req, res) => {
  res.send("<h1>Hello InstaFood lovers!</h1>");
});

export default app;
