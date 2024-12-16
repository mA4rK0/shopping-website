import Product from "../models/Product.js";

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, image, description, stock, category, price, available, shipping } = req.body;
    await Product.findByIdAndUpdate(id, { name, image, description, stock, category, price, available, shipping }, { new: true });
    res.redirect("http://localhost:4321/dashboard");
  } catch (error) {
    res.status(500).json({ message: "Failed to update product", error });
  }
};

export default updateProduct;
