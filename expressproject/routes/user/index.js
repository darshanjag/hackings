const express= require("express");
const Router = express.Router();


Router.get('/user',function(req,res,next){
    res.send('hello i am from user')
});
Router.get('/user/login',function(req,res,next){
    res.send('hello i am from login')
});
Router.get('/user/resgister',function(req,res,next){
    res.send('hello i am from register ')
});

module.exports=Router;