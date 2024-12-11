import express from "express";
import displayProducts from "../controllers/DisplayProducts.js";

const router = express.Router();

router.get("/displayProducts", displayProducts);

export default router;
