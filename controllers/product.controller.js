const { productService } = require("../services");

let addProduct = async (req, res) => {
  let body = req.body;

  let product = await productService.addProduct(body);

  res.status(201).json({
    message: "product created succes",
    product,
  });
};

module.exports = { addProduct };
