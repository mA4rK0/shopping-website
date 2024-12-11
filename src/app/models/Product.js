import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
    maxLength: 200,
  },
  stock: {
    type: Number,
    required: true,
    min: 0,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  available: {
    type: Boolean,
    required: true,
    enum: [true, false],
    default: true,
  },
  shipping: {
    type: Number,
    required: true,
    min: 0,
  },
});

//TODO : move this method to update controller file
// productSchema.methods.outStock = function () {
//   this.stock = 0;
//   this.available = false;
//   return this.save();
// };

//TODO : move this static method to update controller file
productSchema.statics.closeStore = function () {
  return this.updateMany({}, { stock: 0, available: false });
};

const Product = mongoose.model("Product", productSchema);

export default Product;
