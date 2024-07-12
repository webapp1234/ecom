let express = require("express");
let adminRoute = require("./admin.route");
let userRoute = require("./user.route");
let productRoute = require("./product.route");
let orderRoute = require("./order.route");
let routes = express.Router();

routes.use("/admin", adminRoute);
routes.use("/user", userRoute);
routes.use("/product", productRoute);
routes.use("/order", orderRoute);

module.exports = routes;
