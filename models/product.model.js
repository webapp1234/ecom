let mongoose = require("mongoose");

let productSchema = new mongoose.Schema({
  productName: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
});

let product = mongoose.model("productSchema", productSchema);

module.exports = product;
