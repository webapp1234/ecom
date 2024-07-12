const { orderService } = require("../services");

let addOrder = async (req, res) => {
  let body = req.body;

  let order = await orderService.addOrder(body);

  res.status(201).json({
    message: "order placed successfully",
    order,
  });
};

let getAllOrder = async (req, res) => {
  let orders = await orderService.getAllOrder();
  res.status(200).json({
    message: "all order get successfully",
    orders,
  });
};

module.exports = { addOrder, getAllOrder };
