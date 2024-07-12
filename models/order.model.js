let mongoose = require("mongoose");

let orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "adminSchema",
  },
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "productSchema",
  },
  date: {
    type: String,
  },
});

let order = mongoose.model("orderSchema", orderSchema);
module.exports = order;
