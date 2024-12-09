import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: String,
  image: String,
  description: String,
  stock: Number,
  category: String,
  price: Number,
  available: Boolean,
  shipping: Number,
});

const Product = mongoose.model("Product", productSchema);

export default Product;
