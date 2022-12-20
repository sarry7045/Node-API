require("dotenv").config();
const mongoose = require("mongoose");
const connectDB = require("./DB/ConnectDB");
const ProductSchema = require("./Models/ProductSchema.js");
const ProductsJSON = require("./Products.json");

mongoose.set("strictQuery", false);

const start = async () => {
  try {
    await connectDB(process.env.MONGODB_URL);
    await ProductSchema.deleteMany()
    await ProductSchema.create(ProductsJSON);
    console.log("Success");
  } catch (error) {
    console.log(error);
  }
};
start();
