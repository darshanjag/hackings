const express= require("express");
var app = express();
const port = process.env.PORT || 1234;
const route = require('./routes/index');

app.use('/', route.userRoute);
// when request for /admin fetch from ./routes/admin/index '/admin' route
app.use('/', route.adminRoute);
app.listen(port,()=>{
    console.log(`Server started at ${port}`);

})
