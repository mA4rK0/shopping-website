import express from "express";
import createProduct from "../controllers/CreateProduct.js";
import displayProducts from "../controllers/DisplayProducts.js";
import displayAProduct from "../controllers/DisplayAProduct.js";
import updateProduct from "../controllers/UpdateProduct.js";
import findById from "../controllers/FindById.js";

const router = express.Router();

router.post("/createProduct", createProduct);
router.get("/displayProducts", displayProducts);
router.get("/display/:product", displayAProduct);
router.get("/findById/:id", findById);
router.patch("/edit/:id", updateProduct);

export default router;
