const { adminService } = require("../services");

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
    let { path } = req.file;
    // console.log(body);

    let newBody = {
      ...body,
      profile: path,
    };

    let admin = await adminService.register(newBody);

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

module.exports = { getAdmin, register };
