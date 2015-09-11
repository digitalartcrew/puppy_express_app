var express = require('express');
	app = express();
	bodyParser = require("body-parser");


var id = 2;



app.set('view engine', 'ejs');

app.use(express.static(__dirname + "/public"));
app.use(bodyParser.urlencoded({extended: true}));

var puppies = [{
	name: "Mac", age: 2, id: 1
}, ];



app.get('/', function(req,res){
//use res.render
res.render('index',{puppies: puppies});
});




// To get a form to save a new puppy
app.get('/puppies/new', function (req,res){
	res.render('puppies/new');
});

//To save a new puppy
app.get('/puppies', function (req,res){
	var pupName= req.query.puppy_name;
	var pupAge = req.query.puppy_age;
	var pupImg = req.query.puppy_image;
	puppies.push({name: pupName, age: pupAge, id: id, image:pupImg});
	id++;
	res.redirect('/');
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
	// if (currentPuppy === undefined){
	// 	res.redirect('/');
	// }


});

app.get('/about', function(){});

app.get('/contact', function(){});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});