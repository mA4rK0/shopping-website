import Product from "../models/Product.js";

const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.redirect("http://localhost:4321/dashboard");
  } catch (error) {
    res.status(500).json({ message: "Failed to delete product", error });
  }
};

export default deleteProduct;
