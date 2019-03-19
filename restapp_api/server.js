const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const axios = require("axios");
var db = require('./dbconnect');
var User = require('./models/user');
var fs =require ('fs')
var jade = require('jade')
const port = process.env.PORT || 8080;
var app = express();
app.set("view engine",'jade')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.get("/",function(req,res){
  res.render(__dirname + '/views/index.jade')
})

app.post("/",function(req,res){
  
    const gitdata=axios.get('https://api.github.com/users/'+req.body.name)

    .then(function(response) {
     var obj={
         "public_repos":`${response.data.public_repos}`,
         
         "followers":`${response.data.followers}`,

         "following":`${response.data.following}`


     }
          res.render('index',obj);
        });
})
app.post("/userget",function(req,res){
  var user = new User()
  user.public_repos= req.body.public_repos;
  console.log(req.body.public_repos)
  user.following=req.body.following;
  user.followers=req.body.followers;
  user.save(function(err){
    if(err){  console.log(req.body.public_repos)

        throw err;
    }
    res.json({"Status": "Success"});
});
})




// app.post("/",function(req,res){
  
 
        


// });
app.listen(port,()=>{
	console.log(`server started at ${port}`);
});