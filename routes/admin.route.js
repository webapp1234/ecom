let express = require("express");
const { adminController } = require("../controllers");
const upload = require("../middlewares/upload");

let route = express.Router();

route.get("/get", adminController.getAdmin);
route.post("/register", upload.single("profile"), adminController.register);

module.exports = route;
