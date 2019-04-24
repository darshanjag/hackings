var express = require("express");
var router = express.Router();
var multer = require("multer");
var Email= "itsdarshanjagtap@gmail.com";
const nodemailer = require("nodemailer");
var bodyParser =require("body-parser");
const port = process.env.PORT || 8080;
var qpdf = require('node-qpdf');


var app = express();
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: Email, // generated ethereal user
      pass: "someonekillthedj" // generated ethereal password
    }
  });


/* GET users listing. */
app.use("/",express.static(__dirname + "/form"));
//multer
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);    
	}
});

var upload = multer({ storage: storage });

app.post("/",upload.single("resume"), function (req, res) {  	
//qpdf
 var password = req.body.password1
  var options = {
    keyLength: 128,
    password: ""+password
}
if(req.body.password==req.body.Cpassword){
 var exec = require('child_process').exec;
 //mailer
 let mailOptions = {
    from: `"darshan jagtap" <${Email}>`, // sender address
    to: "itsdarshanjagtap@gmail.com, "+req.body.email,  // list of receivers
    subject: "complaint", // Subject line
    text: "greetings", // plain text body
    html: `<b>encrypted file</b><br><h3>greetings :` + req.body.name+ `here's your encrypted pdf`,
    attachments: [{
      filename: req.file.filename,
      path : './uploads/encrypted-'+req.file.filename

    }]
  };

localFilePath = `./uploads/${req.file.filename}`
outputFilePath =`./uploads/encrypted-${req.file.filename}`
qpdf.encrypt(localFilePath, options,outputFilePath);
      
 
 transporter.sendMail(mailOptions,(error,info)=>{
    if(error){
      return console.log(error)
    }
    console.log('message sent: %s', info.messageId);
  })
}else{

  res.redirect(req.get('referer'));
 
}

	res.json({"status":"sent"});
 
	// Everything went fine.
});



app.listen(port);

module.exports = router;
