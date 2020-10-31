const express = require("express");
const mailMeRouter = express.Router();
const nodemailer = require("nodemailer");

const transport = {
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASSWORD,
  },
};

const transporter = nodemailer.createTransport(transport);

mailMeRouter.post("/", (req, res, next) => {
  const mail = {
    subject: "Portfolio mail!!",
    to: process.env.EMAIL,
    text: `
		from: ${req.body.name}
		contact: ${req.body.email}
		message: ${req.body.text}
		`,
  };

  transporter.sendMail(mail, (error, data) => {
    if (error) {
      res.json({
        status:
          "Im sorry to say that your message wasn't sent properly, please try again",
      });
    } else {
      res.json({
        status: "Message succesfully sent, I'm looking forward to read it! ",
      });
    }
  });
});

module.exports = mailMeRouter;
