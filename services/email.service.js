const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "webappstd@gmail.com",
    pass: "deqdrvkgrugeavfm",
  },
});

let sendEmail = (to, subject, data) => {
  return transporter.sendMail({
    from: "<webappstd@gmail.com>", // sender address
    to: to, // list of receivers
    subject: subject, // Subject line
    text: data, // plain text body
  });
};

module.exports = sendEmail;
