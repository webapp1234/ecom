const { productSchema } = require("../models");

let addProduct = (body) => {
  return productSchema.create(body);
};
module.exports = { addProduct };
