var express = require("express");
var router = express.Router();
var multer = require("multer");
var bodyParser =require("body-parser");
const port = 8080;
var qpdf = require('node-qpdf');


var app = express();
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));


/* GET users listing. */
app.use("/",express.static(__dirname + "/form"));

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
  var password = req.body.password
  var options = {
    keyLength: 128,
    password: ""+password
}
localFilePath = `./uploads/${req.file.filename}`
outputFilePath ='./uploads/'
qpdf.encrypt(localFilePath, options);

if(req.body.password==req.body.Cpassword){



}else{

  res.redirect(req.get('referer'));
 
}

	res.json({"status":"sent"});
 
	// Everything went fine.
});



app.listen(port);

module.exports = router;
