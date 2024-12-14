import Product from "../models/Product.js";

const createProduct = async (req, res) => {
  try {
    const { name, image, description, stock, category, price, available, shipping } = req.body;
    const newProduct = new Product({
      name,
      image,
      description,
      stock,
      category,
      price,
      available,
      shipping,
    });
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    console.error("Error saving default product:", error);
    res.status(500).json({ message: "Failed to save product", error });
  }
};

export default createProduct;
