import Product from "../models/Product.js";

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, description, stock, category, price, available, shipping } = req.body;
    const updatedProduct = await Product.findByIdAndUpdate(id, { name, image, description, stock, category, price, available, shipping }, { new: true });
    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};

export default updateProduct;
