const mongoose = require('mongoose');

module.exports = mongoose.connect('mongodb://localhost:27017/git', function(err){
    if(err){
        throw err;
    }
    console.log("Database connected");
});