import mongoose from "mongoose";

const connectdb = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/product_db").then((result) => {
      console.log("Connected to MongoDB");
    });
  } catch (error) {
    console.log(error);
  }
};

export default connectdb;
