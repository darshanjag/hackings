const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var userSchema = new Schema({
    name : {
        type:String,
        required:[true,"name is required"]
    },
    password : {
        type : String,
        required:[true,"email is required"],
         match: [
     /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
     "Please enter a valid email address"
   ]
    },
    mobile : {
    	type: Number,
    	match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, "Please enter a valid mobile number"]
    }

});

module.exports = mongoose.model('User',userSchema, 'user');


//var dataSchema = new Schema({..}, { collection: 'data' })., The third parameter is the name of collection, first parameter is schemaname
