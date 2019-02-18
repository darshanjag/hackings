const express= require("express");
const Router = express.Router();
var app = express();
const port = process.env.PORT || 1234;
Router.get('/admin',function(req,res,next){
    res.send('i am from admin')
});
Router.get('/admin/login',function(req,res,next){
    res.send('hello i am from login')
});
Router.get('/admin/register',function(req,res,next){
    res.send('hello i am from register')
});
module.exports=Router;