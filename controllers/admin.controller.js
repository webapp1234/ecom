const { createToken } = require("../middlewares/auth");
const { adminService } = require("../services");
const uploadImage = require("../services/cloudnary.service");
const sendEmail = require("../services/email.service");

let getAdmin = async (req, res) => {
  let result = await adminService.getAllAdmin();
  console.log(result);
  res.status(200).json({
    message: "admin get sucess",
    result,
  });
};

let register = async (req, res) => {
  try {
    let body = req.body;
    let { path, originalname } = req.file;
    // console.log(body);

    //cloudnary

    let result = await uploadImage(path, originalname);

    let newBody = {
      ...body,
      profile: result.secure_url,
    };

    console.log(result);

    let admin = await adminService.register(newBody);

    if (admin) {
      let result = await sendEmail(
        admin.email,
        "Test Mail",
        `Welcome ${admin.email}`
      );

      console.log(result);
    }

    //   console.log(admin, "resss");

    res.status(201).json({
      message: "admin created success",
      admin,
    });
  } catch (err) {
    res.status(500).json({
      error: err.errors,
    });
  }
};

let login = async (req, res) => {
  try {
    let { email, password } = req.body;
    let admin = await adminService.findByEmail(email);

    if (!admin) {
      throw new Error("user not found");
    }

    if (admin.password !== password) {
      throw new Error("password invalid");
    }

    let token = createToken({ admin });

    res.cookie("token", token);

    res.status(200).json({
      message: "login success",
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

let getProfile = async (req, res) => {
  let admin = req.admin;

  res.status(200).json({ message: "profile get success", admin });
};
module.exports = { getAdmin, register, login, getProfile };
