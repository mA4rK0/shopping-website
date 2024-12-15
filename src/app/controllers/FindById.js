import Product from "../models/Product.js";

const findById = async (req, res) => {
  try {
    const { id } = req.params;
    const idProduct = await Product.findOne({ _id: id });
    res.status(200).json(idProduct);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

export default findById;
