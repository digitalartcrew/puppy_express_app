var express = require('express'),
  app = express(),
  bodyParser = require('body-parser');
  methodOverride = require('method-override');

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(methodOverride('_method'));


var id = 1;
var puppies = [];

app.get('/', function(req,res){
	res.render('index',{puppies: puppies});
});

// To get a form to save a new puppy
app.get('/puppies/new', function (req,res){
	res.render('puppies/new');
});

//To save a new puppy
app.post('/puppies', function (req,res){
	var pupName= req.body.puppy_name;
	var pupAge = req.body.puppy_age;
	var pupImg = req.body.puppy_image;
	puppies.push({name: pupName, age: pupAge, id: id, image: pupImg });
	id++;
	res.redirect('/');
});



app.get('/puppies/update/:id', function (req, res){
		var id = req.params.id;
	var currentPuppy;

		puppies.forEach(function(puppy){
		if( parseInt(id) === puppy.id){
			currentPuppy = puppy;
			console.log("Found Match");
			res.render("puppies/update", {puppy: puppy});
		} 
	});
});

app.delete('/puppies/:id', function (req, res){
	var id = req.params.id;
	puppies.forEach(function(puppy, index){
		if( parseInt(id) === puppy.id){
			puppies.splice(index, 1);
			
		} 
	});
		res.redirect('/');

});

app.put('/puppies/update/:id', function (req, res){
	var id = req.params.id;
	var currentPuppy;
	var pupName= req.body.puppy_name;
	var pupAge = req.body.puppy_age;
	var pupImg = req.body.puppy_image;

		puppies.forEach(function(puppy){
		if( parseInt(id) === puppy.id){
			currentPuppy = puppy;
			console.log("Found Match!");
			
		} 
	currentPuppy.name = pupName;
	currentPuppy.age = pupAge;
	currentPuppy.image = pupImg;
	res.redirect('/');

	});
});



//To Find a puppy by ID
app.get('/puppies/:id', function (req, res){
	var id = req.params.id;
	var currentPuppy;
	puppies.forEach(function(puppy){
		if( parseInt(id) === puppy.id){
			currentPuppy = puppy;
			console.log("Found Match");
			res.render("puppies/show", {puppy: puppy});
		} 
	});



});

app.get('/about', function (req, res){
	res.render('about', {puppies: puppies});
});

app.get('/contact', function ( req, res){
	res.render('contact', {puppies: puppies});
});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});