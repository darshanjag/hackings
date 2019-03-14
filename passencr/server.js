const express = require("express");
var app = express();
const bodyParser = require("body-parser");
var db = require('./dbconnect');
var User = require('./models/user');

const port = process.env.PORT || 8080;

app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended : true}));
app.use("/",express.static(__dirname + '/view'));

app.post('/',function(req,res){
    var user = new User();
    user.name = req.body.name;
    user.password = req.body.password;

    user.save(function(err){
        if(err){
            throw err;
        }
        res.json({"Status": "Success"});
    });
});
app.listen(port,()=>{
	console.log(`server started at ${port}`);
})