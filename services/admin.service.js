const { adminSchema } = require("../models");

let register = (body) => {
  console.log(body, "from service");

  return adminSchema.create(body);
};

let getAllAdmin = () => {
  return adminSchema.find();
};

let findByEmail = (email) => {
  return adminSchema.findOne({ email });
};

module.exports = { register, getAllAdmin, findByEmail };
