var express = require('express');
	app = express();


app.set('view engine', 'ejs');

app.get('/', function(req,res){
//use res.render
res.render('index',{name:"Puppy"});
});

app.listen(3000, function(){
	console.log("Server running on port 3000");
});