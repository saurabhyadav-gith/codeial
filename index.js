//acquiring express
const express= require('express');
const app=express();

//defining port
const port=8000;

//using express router
app.use('/',require('./routes'));

//setting up view engine(ejs)
app.set('view engine','ejs');
app.set('views','./views');

//making app listen
app.listen(port,function(err){
    if(err)
    console.log(`Error in running server: ${err}`)

    console.log(`Server is running : ${port}`);
});