const ProductSchema = require("../Models/ProductSchema.js");
const getAllProducts = async (req, res) => {
  const { company, name, featured, sort, select } = req.query;
  const queryObjects = {};

  if (company) {
    queryObjects.company = company;
  }

  if (featured) {
    queryObjects.featured = featured;
  }
  if (name) {
    queryObjects.name = { $regex: name, $options: "i" };
  }

  let ApiData = ProductSchema.find(queryObjects);

  if (sort) {
    let sortFix = sort.replace(",", "");
    ApiData = ApiData.sort(sortFix);
  }

  if (select) {
    let selectFix = select.split(",").join(" ");
    ApiData = ApiData.select(selectFix);
  }

  const myData = await ApiData;
  res.status(200).json({ myData });
};

const getAllProductsTesting = async (req, res) => {
  const myData = await ProductSchema.find(req.query).sort("name");
  res.status(200).json({ myData });
};

module.exports = { getAllProducts, getAllProductsTesting };
