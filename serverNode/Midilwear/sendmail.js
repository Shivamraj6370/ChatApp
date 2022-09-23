var nodemailer = require("nodemailer");
import { get } from "../config";
var email = get("staging").email;
// console.log(email)

export const Sendmail = async (from, to, subject, text) => {
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: email.emailId,
      pass: email.password,
    },
  });
  var mailOptions = {
    from,
    to,
    subject,
    text,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return false;
    } else {
      console.log("Email sent: " + info.response);
      return ture;
    }
  });
};
