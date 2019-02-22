const express = require('express');
const router = express.Router();
const Actor= require('../models/actor');
const Movie = require('../models/movie');
router.route('/:aid').get(async(req,res,next)=>{
    const {aid} =req.param;
    const actor = await Actor.findById(aid).populate('movies','name -_id');
    res.json(actor);
}).post(async(req,res,next)=>{
    const {aid} = req.params;
    const newMovie = new Movie(req.body);
    const actor = await Actor.findById(aid);
    newMovie.actor = actor;

    await newMovie.save();

    actor.movies.push(newMovie);
    await actor.save();

    res.json(newMovie);
});
module.exports=router;