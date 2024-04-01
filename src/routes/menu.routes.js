import { Router } from "express";
import { menuList } from "../controllers/menuList.controller.js";

const router = Router();

router.route("/").get(menuList);

export default router;
