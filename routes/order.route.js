let express = require("express");
const { orderController } = require("../controllers");

let route = express.Router();

route.post("/add-order", orderController.addOrder);
route.get('/getallorder',orderController.getAllOrder)
route.get('/get/:id')

module.exports = route;
