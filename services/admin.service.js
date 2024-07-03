const { adminSchema } = require("../models");

let register = (body) => {
  console.log(body, "from service");

  return adminSchema.create(body);
};

let getAllAdmin = () => {
  return adminSchema.find();
};

module.exports = { register, getAllAdmin };
