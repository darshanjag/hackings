var express = require('express');
var router = express.Router();
var multer = require('multer');
var bodyParser =require('body-parser');
const port = 8080;
const nodemailer = require("nodemailer");
var Email= "itsdarshanjagtap@gmail.com"
var path = require('path')
 var app = express();
 app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));


/* GET users listing. */
app.use("/",express.static(__dirname + '/form'));

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname)    
  }
})

var upload = multer({ storage: storage })

app.post('/',upload.single('resume'), function (req, res) {  	
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true, // true for 465, false for other ports
      auth: {
        user: Email, // generated ethereal user
        pass: "someonekillthedj" // generated ethereal password
      }
      });
      let mailOptions = {
        from: `"darshan jagtap" <${Email}>`, // sender address
        to: "itsdarshanjagtap@gmail.com, "+req.body.email,  // list of receivers
        subject: "complaint", // Subject line
        text: "hello darshan", // plain text body
        attachments:[{
          path: '/uploads/'+req.body.file
        }],
        html: `<b>New Complaint</b><br><h3>name:` + req.body.name+`<br>phone:`+req.body.phone+`<br>email:`+req.body.email+
        `<br>problem:`+req.body.problem+`<br>recieptn:`+req.body.recieptn + `</h3>`// html body
      };

      res.json({"status":"sent"})
 
    // Everything went fine.
  })



app.listen(port,()=>{
	console.log(`Server started at ${port}`);
})

module.exports = router;
