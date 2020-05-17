const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/codeial_development'); //calling it codeila development


const db= mongoose.connection;

//if there is an error in connecing to the database
db.on('error',console.error.bind(console,"Error connecting to mongoDB"));


//if connection is made
db.once('open',function(){
    console.log('connected to database :: MongoDB');
});


module.exports = db;