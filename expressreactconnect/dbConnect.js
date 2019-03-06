const mongoose = require("mongoose");

module.exports= mongoose.connect('mongodb://localhost:27017/contact',{ useNewUrlParser: true },function(err){
    if(err){
        throw err;
    }
    else{
        console.log("Successfully Connected to the DataBase");
    }
})
