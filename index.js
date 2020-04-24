//acquiring express
const express= require('express');
const app=express();

//defining port
const port=8000;

//using express router
app.use('/',require('./routes'));

//making app listen
app.listen(port,function(err){
    if(err)
    console.log(`Error in running server: ${err}`)

    console.log(`Server is running : ${port}`);
});