const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8080;
var exec = require('child_process').exec;

app.use("/",express.static(__dirname + "/views"));

app.get('/'function(req,res){
	var filename = req.body.filename;
	var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './')
  },
  filename: function (req, file, cb) {
    cb(null, filename)
  }
});
});
app.post('/',function(req,res){
	
var cmd =  'qpdf --encrypt test test 40 -- ./1.pdf ./encryptpdfvianode.pdf';
exec(cmd, function (err){
       if (err){
          console.error('Error occured: ' + err);
       }else{
          console.log('PDF encrypted :)');
       }
 });
	

	
});


 
app.listen(port,()=>{
	console.log(`server started at ${port}`);
});
