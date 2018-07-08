//Variables Setup
var express = require('express'),
    app     = express(),
    mongoose= require('mongoose')
    

//App Setup
app.set('view engine', 'ejs');

//Home Route
app.get('/', function(req, res) {
   res.render('home'); 
});

//Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Soultrain server is on the move Choo Choo");
})