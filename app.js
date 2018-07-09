//Variables Setup
var express = require('express'),
    app     = express(),
    mongoose= require('mongoose')
    

//App Setup
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));

//Home Route
app.get('/', function(req, res) {
   res.render('home'); 
});

//QUIENES SOMOS ROUTES
//HISTORIA ROUTE
app.get('/historia', function(req, res) {
    res.render('historia');
});
app.get('/staff', function(req,res) {
   res.render('staff'); 
});
app.get('/comunidades_amigas', function(req, res) {
   res.render('comunidades_amigas'); 
});



//Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Soultrain server is on the move Choo Choo");
})