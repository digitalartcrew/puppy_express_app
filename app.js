var express = require('express');
	app = express();


app.set('view engine', 'ejs');

app.get('/', function(req,res){
//use res.render
res.render('index',{name:"Puppy"});
});


// To get a form to save a new puppy
app.get('/puppies/new', function(){});

//To save a new puppy
app.get('/puppies', function(){});

//To Find a puppy by ID
app.get('/puppies', function(){});

app.get('/about', function(){});

app.get('/contact', function(){});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});