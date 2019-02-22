const express = require('express');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');
const port = process.env.port || 8080;
const dbconnect = require('./DBConnect');
var app = express();
const movieRoute = require('./routes/movie');
const actorRoute = require('./routes/actor');
app.use(bodyparser.json());
app.use("/", movieRoute);
app.use('/', actorRoute);





app.listen(port,(err)=>{
    if(err)
        throw err
    console.log(`Sever is started ${port}`);
});
