import express from "express";
import cors from "cors";
import connectdb from "./utils/db.js";
import Product from "../models/Product.js";
import productRoutes from "../routes/CRUD_Routes.js";
const app = express();

const port = 3030;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/products", productRoutes);

connectdb();

// app.post("/delete-all-products", async (req, res) => {
//   try {
//     await Product.deleteOne({ name: "Soap" }); // Hapus semua dokumen di koleksi
//     res.status(200).json({ message: "All products deleted successfully" });
//   } catch (error) {
//     console.error("Error deleting all products:", error);
//     res.status(500).json({ message: "Failed to delete all products", error });
//   }
// });

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
