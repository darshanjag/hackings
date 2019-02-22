const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const movieSchema = new Schema({
    name:{
        type: String
    },
    rtscore:{
        type: Number
    },
    actor:{
        type: Schema.Types.ObjectId,
        ref: 'actor'
    }
});
module.exports = mongoose.model('movie',movieSchema);