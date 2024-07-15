let express = require("express");
const { adminController } = require("../controllers");
const upload = require("../middlewares/upload");
const { isLogin } = require("../middlewares/auth");

let route = express.Router();

route.get("/get", adminController.getAdmin);
route.post("/register", upload.single("profile"), adminController.register);
route.post("/login", adminController.login);
route.get("/profile", isLogin, adminController.getProfile);

module.exports = route;
