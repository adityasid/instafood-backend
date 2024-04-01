import { Router } from "express";
import { restaurantList } from "../controllers/restaurantList.controller.js";

const router = Router();

router.route("/").get(restaurantList);

export default router;
