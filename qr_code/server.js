const fs = require('fs');
const express = require("express");
const qrcode = require('qrcode');
const bodyParser = require('body-parser');
const app = express();
app.use('/',express.static(__dirname + '/views'));
const port = process.env.PORT || 8080;

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
app.post("/",function(req,res){

  
async function qr_code(){
  var rcode = await qrcode.toDataURL(`${req.body.qurl}`);
  fs.writeFileSync('./qr.html', `<img src="${rcode}">`);
  console.log('Wrote to ./qr.html');
  }
  qr_code();
  
})
app.listen(port,()=>{
	console.log(`server started at ${port}`);
});