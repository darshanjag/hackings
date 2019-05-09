const fs = require('fs');
// var Jimp = require('jimp');
const QRReader = require('qrcode-reader');
const express = require("express");
const qrcode = require('qrcode');
const bodyParser = require('body-parser');
const app = express();
app.use('/',express.static(__dirname + '/views'));
const port = process.env.PORT || 8080;
var content;
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
app.post("/",function(req,res){

  
async function qr_code(){
  var rcode = await qrcode.toDataURL(`${req.body.qurl}`);
  fs.writeFileSync('./qr.html', `<img src="${rcode}">`);
  console.log('Wrote to ./qr.html');
  }
  qr_code();
  
});
var storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, "uploads/");
	},
	filename: function (req, file, cb) {
		cb(null, file.originalname);    
	}
});

var upload = multer({ storage: storage });

app.post("/decode",upload.single("png"),function(req,res){
  
//   fs.readFile('./qr.html', function read(err, data) {
//     if (err) {
//         throw err;
//     }
//     content = data;
//     fs.writeFileSync('./qread.html', `${content}`);

//     // Invoke the next step here however you like
//     console.log(content); 
// })
// async function reader(){
// var filepath = "./uploads/"+res.file.filename;


// const img = await Jimp.read(fs.readFileSync(`${filepath}`));

//   const qr = new QRReader();

//   // qrcode-reader's API doesn't support promises, so wrap it
//   const value = await new Promise((resolve, reject) => {
//     qr.callback = (err, v) => err != null ? reject(err) : resolve(v);
//     qr.decode(img.bitmap);
//   });

//   // { result: 'http://asyncawait.net',
//   //   points:
//   //     [ FinderPattern {
//   //         x: 68.5,
//   //         y: 252,
//   //         count: 10,
//   // ...
//   console.log(value);

//   // http://asyncawait.net
//   console.log(value.result);
// }
// reader();
});
app.listen(port,()=>{
	console.log(`server started at ${port}`);
});