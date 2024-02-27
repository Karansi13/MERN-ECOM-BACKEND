const passport = require('passport');
const nodemailer = require("nodemailer")

exports.isAuth = (req, res, done) => {
  return passport.authenticate('jwt')
};

// Email

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 587,
  secure: false,
  auth: {
    user: "karansinghk1307@gmail.com",
    pass: process.env.MAIL_PASSWORD,
  },
});


exports.sanitizeUser = (user)=>{
    return {id:user.id, role:user.role}
}

exports.cookieExtractor = function(req) {
  var token = null;
  if (req && req.cookies) {
      token = req.cookies['jwt'];
  }
  // temporary   
  // token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1ZGEzYTdjZDM5M2IxYmU5ODdlYzU0NCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzA4ODAwOTUxfQ.vD_7bWzyEgRckHpQh5VAheluPVyEmfyAroWJADSx1oI";
  return token;
};


exports.sendMail = async function({ to, subject, text, html }){
  
    let info = await transporter.sendMail({
      from: '"E-commerce" karansinghk1307@gmail.com>', // sender address
      to: to,
      // "karansinghk1307@gmail.com", // list of receivers
      subject,
      text,
      html,
    });
  return info;
}