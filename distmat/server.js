const express = require("express");
const axios = require('axios')
var app = express();
const port = process.env.PORT || 8080;
const bodyParser = require('body-parser');
const api1="https://www.mapquestapi.com/directions/v2/route?key=CTZEEW7z9Y8POYVlGKiqAl3iaGcidctk&from=Denver%2C+CO&to=Boulder%2C+CO&outFormat=json&ambiguities=ignore&routeType=fastest&doReverseGeocode=false&enhancedNarrative=false&avoidTimedConditions=false";
app.use("/",express.static(__dirname + "/views"));
app.post("/",function(req,res){
	axios.get(api1)
  .then(function(response) {
    var distance=response.data.route.distance;
 res.send({success: true, message: `<li>the distance is:${distance}</li>`});
  });
  
});
app.listen(port,()=>{
	console.log(`server started at ${port}`);
})
