require("dotenv").config()
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const ProductsRoutes = require("./Routes/App");
const connectDB = require("./DB/ConnectDB.js");
const PORT = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Shopping API   =   /products");
});

app.use("/products", ProductsRoutes);

mongoose.set('strictQuery', false);

const start = async () => {
  await connectDB(process.env.MONGODB_URL);
  try {
    app.listen(PORT, () => {
      console.log(`The Server is Running on PORT ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
