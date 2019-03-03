const express= require("express");
var app = express();
var nodemailer = require("nodemailer")
const port = process.env.PORT || 1234;
const route = require('./routes/index');

app.use('/', route.userRoute);
// when request for /admin fetch from ./routes/admin/index '/admin' route
 let transporter = nodemailer.createTransport({
    host: "gains.arrowsupercloud.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "darshan@darshanjagtap.in", // generated ethereal user
      pass: "darshan@123" // generated ethereal password
    }
  });
 let mailOptions = {
    from: '"darshan jagtap" <darshan@darshanjagtap.in>', // sender address
    to: "itsdarshanjagtap@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>" // html body
  };
  transporter.sendMail(mailOptions,(error,info)=>{
  	if(error){
  		return console.log(error)
  	}
  	console.log('message sent: %s', info.messageId);
  })
app.use('/', route.adminRoute);
app.listen(port,()=>{
    console.log(`Server started at ${port}`);

})
