const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const actorSchema= new Schema({

    name : {
        type: String
    },
    age : {
        type : Number
    },
    movies:[ {
        type: Schema.Types.ObjectId,
        ref:'movie'
        }

    ]
});
module.exports = mongoose.model('actor',actorSchema,'actorCollection');
