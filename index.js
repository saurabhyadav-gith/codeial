//acquiring express
const express= require('express');
const app=express();

//acquiring cookie parser
const cookieParser = require('cookie-parser');

//acquiring ejs layout
const expressLayouts= require('express-ejs-layouts');

//importing mongoose
const db = require('./config/mongoose');

app.use(express.urlencoded());
//setting up cookieparser
app.use(cookieParser());

app.use(expressLayouts);

//extract styles,scripts from sub pages into layout 
app.set('layout extractStyles',true );
app.set('layout extractScripts',true );


//defining port
const port=8000;

//using express router
app.use('/',require('./routes'));

//including static file
app.use(express.static('./assets'));

//setting up view engine(ejs)
app.set('view engine','ejs');
app.set('views','./views');

//making app listen
app.listen(port,function(err){
    if(err)
    console.log(`Error in running server: ${err}`)

    console.log(`Server is running : ${port}`);
});