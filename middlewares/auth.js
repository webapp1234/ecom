let jwt = require("jsonwebtoken");

let createToken = (data) => {
  return jwt.sign(data, process.env.SECRET);
};

let isLogin = (req, res, next) => {
  try {
    let token = req.cookies["token"];
    console.log(token);
    if (!token) {
      throw new Error("you not login");
    }

    let { admin } = jwt.verify(token, process.env.SECRET);
    req.admin = admin;
    next();
  } catch (err) {
    res.status(401).json({ error: err.message });
  }
};

module.exports = { createToken, isLogin };
