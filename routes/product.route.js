let express = require("express");
const { productController } = require("../controllers");

let route = express.Router();

route.post("/add", productController.addProduct);

module.exports = route;
