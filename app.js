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


//PROGRAMAS ROUTE
app.get('/programas', function(req, res) {
   res.render('programas'); 
});

//CONTACTENOS ROUTE
app.get('/contactenos', function(req, res) {
   res.render('contactenos'); 
});

//DONE AQUI ROUTE
app.get('/done_aqui', function(req, res){
   res.render('done_aqui'); 
});

//BLOG COMUNITARIO ROUTE
app.get('/blog_comunitario', function(req, res) {
   res.render('blog_comunitario'); 
});


//Server
app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Soultrain server is on the move Choo Choo");
})