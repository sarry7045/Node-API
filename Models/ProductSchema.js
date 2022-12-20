const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: [true, "Price must be Provided"],
  },
  featured: {
    type: Boolean,
    default: false,
  },
  rating: {
    type: Number,
    default: 4.5,
  },
  createdBy: {
    type: Date,
    default: Date.now(),
  },
  company: {
    type: String,
    // enum: {
    //   values: ["apple", "samsung", "motorola", "mi"],
    //   message: `{Values} is not Supported`,
    // },
  },
});

module.exports = mongoose.model("Product", productSchema);
