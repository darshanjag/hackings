const express = require("express");
var app = express();
var Email= "itsdarshanjagtap@gmail.com"
const port = process.env.PORT || 8080;
var db = require('./dbconnect');
var User = require('./models/user');
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
app.use("/",express.static(__dirname + '/form'));

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/',function(req,res){
 var user = new User();

    user.name = req.body.name;
    user.email = req.body.email;
    user.phone = req.body.phone;
    user.problem=req.body.problem;
    user.recieptn= req.body.recieptn;
    let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: Email, // generated ethereal user
      pass: your password // generated ethereal password
    }
  });
 let mailOptions = {
    from: `"darshan jagtap" <${Email}>`, // sender address
    to: "itsdarshanjagtap@gmail.com, "+req.body.email,  // list of receivers
    subject: "complaint", // Subject line
    text: "hello darshan", // plain text body
    html: `<b>New Complaint</b><br><h3>name:` + req.body.name+`<br>phone:`+req.body.phone+`<br>email:`+req.body.email+
    `<br>problem:`+req.body.problem+`<br>recieptn:`+req.body.recieptn + `</h3>`// html body
  };

  transporter.sendMail(mailOptions,(error,info)=>{
  	if(error){
  		return console.log(error)
  	}
  	console.log('message sent: %s', info.messageId);
  })
  
		res.sendFile(__dirname+'/form/thankyou.html');


});

app.get('/',function(req,res){

	User.find({},function(err,users){
        if(err){
            throw err;
        }
        res.json(users);
	});
});

app.listen(port,()=>{
	console.log(`server started at ${port}`);
})