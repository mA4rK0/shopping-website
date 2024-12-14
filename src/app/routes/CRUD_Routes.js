import express from "express";
import createProduct from "../controllers/CreateProduct.js";
import displayProducts from "../controllers/DisplayProducts.js";
import displayAProduct from "../controllers/DisplayAProduct.js";

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/displayProducts", displayProducts);
router.get("/display/:product", displayAProduct);

export default router;
