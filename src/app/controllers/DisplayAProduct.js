import Product from "../models/Product.js";

const displayAProduct = async (req, res) => {
  try {
    const { product } = req.params;
    const disProduct = await Product.findOne({ name: product });
    res.status(200).json(disProduct);
  } catch (error) {}
};

export default displayAProduct;
