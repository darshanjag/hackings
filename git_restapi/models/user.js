const mongoose = require("mongoose");
var Schema = mongoose.Schema;
var userSchema = new Schema({
    public_repos : {
        type:Number
    },
    following : {
        type : Number
    },
   
    followers: {
    	type: Number
    }

});

module.exports = mongoose.model('gitHub',userSchema, 'newinfo');