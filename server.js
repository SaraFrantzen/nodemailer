const express = require("express");
const app = express();
require("dotenv").config();
const morgan = require("morgan");
const nodemailer = require("nodemailer");
const port = 4444;

const mailMeRouter = require("./routes/mailMe");

app
.use(morgan("dev"))
.use(express.json())
.use("/mailme", require("./routes/mailMe"))
.listen(port, () => {
  console.log(`app is live on ${port}`);
});



