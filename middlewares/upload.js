const multer = require("multer");
let path = require("path");
let fs = require("fs");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    fs.mkdirSync(path.join(__dirname, "../public/images"), { recursive: true });
    cb(null, path.join(__dirname, "../public/images"));
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + "-" + Math.random() + ".jpg");
  },
});

const upload = multer({ storage: storage });

module.exports = upload;
