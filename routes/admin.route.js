let express = require("express");
const { adminController } = require("../controllers");

let route = express.Router();

route.get("/get", adminController.getAdmin);
route.post("/register", adminController.register);

module.exports = route;
