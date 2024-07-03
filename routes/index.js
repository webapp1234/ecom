let express = require("express");
let adminRoute = require("./admin.route");
let userRoute = require("./user.route");
let routes = express.Router();

routes.use("/admin", adminRoute);
routes.use("/user", userRoute);

module.exports = routes;
