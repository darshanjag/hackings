var express = require("express");
const port = process.env.PORT || 8080;
var qpdf = require('node-qpdf');
var app = express();
app.use("/",express.static(__dirname + "/views/"));
var options = {
    keyLength: 128,
    password: "password"
}
localFilePath = `./uploads/sample.pdf`

outputFilePath =`./uploads/encrypted-sample.pdf`

app.post("/encrypt",qpdf.encrypt(localFilePath, options,outputFilePath)
,function(req,res){

	console.log("Hello")
 

});


app.listen(port,()=>{
	console.log(`server started at ${port}`);
})