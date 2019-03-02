const express = require("express");
var app = express();
const port= process.env.PORT || 8080;

app.post('/',function(req,res){


req.send('rzp_test_26ccbdbfe0e84b:69b2e24411e384f91213f22a@api.razorpay.com/v1/payments/?from=1400826740&count=2&skip=1', function (error, response, body) {
  console.log('Response:', body);
});
});

app.listen(port,()=>{
	console.log(`server working at ${port}`);
});