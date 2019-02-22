const express = require('express');
const router = express.Router();
const Actor = require('../models/actor');

router.route('/').get(async(req,res,next)=>{
    const actor = await Actor.find({});
    res.json(actor);

}).post(async(req,res,next)=>{
    const Newactor = Actor(req.body);
    await Newactor.save();
    res.json({"success":"actor"});
});

module.exports= router;