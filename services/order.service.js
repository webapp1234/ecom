const { orderSchema } = require("../models");

let addOrder = (body) => {
  return orderSchema.create(body);
};

let getAllOrder = () => {
  return orderSchema.find().populate(["user", "product"]);
};

module.exports = { addOrder, getAllOrder };
