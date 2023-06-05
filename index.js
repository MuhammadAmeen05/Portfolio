const express = require("express");
const dotenv=require('dotenv')
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const cors=require('cors')
const app = express();
dotenv.config()
app.use(bodyParser.json());
app.use(cors())
app.use(express.json())
app.post("/sendEmail", async (req, res) => {
  try {
    const { username, phoneNumber, email, subject, message } = req.body;
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, 
      auth: {
        user: "muhammadameenbirahmani6@gmail.com", // email account to send from
        pass: process.env.Password, 
      },
    });
    const info = await transporter.sendMail({
   from:'muhammadameenbirahmani6@gmail.com"',  
    to: "ameenofficial05@gmail.com", // list of receivers
      subject: subject, // Subject line
      text: `${username} (${email}, ${phoneNumber})  ${message}`, // plain text body
    });
    res.status(200).send("Email sent successfully.");
  } catch (err) {
    console.error(err);
    res.status(500).send("Failed to send email.");
  }
});
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
