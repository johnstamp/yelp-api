
var express = require('express');
var app = express();


var yelp = require("yelp").createClient({
	  consumer_key: "oX2sb_xE-GeTSb-_bdRvNQ", 
	  consumer_secret: "R0f-oxU75q47LGK05beLY6uOJDQ",
	  token: "dM_EefXlYbxguf6hWzIyq6LovaMeUuFa",
	  token_secret: "kUSpqYdyG63fsowdaBrQLZSzGsA"
		});




app.get('/yelp/search/:term/location/:location', function(req, res) {

	var term=req.params.term;
	var location=req.params.location;

	yelp.search({term: term, location: location,sort:"2",limit:5}, function(error, data) {
		console.log(req.params.term);
		console.log(req.params.location);
		res.header("Access-Control-Allow-Origin", "*")
  		//console.log(error);
  		//console.log(data);
  		res.setHeader('Content-Type', 'application/json');
		res.send(data);
		});


  //res.type('text/plain'); // set content-type
  //res.send('i am a beautiful butterfly'+results); // send text response
});
app.get('/yelp/search/category/:category_filter/location/:location', function(req, res) {

	var category=req.params.category_filter;
	var location=req.params.location;

	yelp.search({category: category, location: location,limit:5}, function(error, data) {
		console.log(category);
		console.log(location);
		res.header("Access-Control-Allow-Origin", "*")
  		//console.log(error);
  		//console.log(data);
  		res.setHeader('Content-Type', 'application/json');
		res.send(data);
		});


  //res.type('text/plain'); // set content-type
  //res.send('i am a beautiful butterfly'+results); // send text response
});


app.get('/yelp/search/:term/longtitude/:longtitude/latitude/:latitude', function(req, res) {

	var term=req.params.term;
	var longtitude=req.params.longtitude;
	var latitude=req.params.latitude;
	var longlat=longtitude+','+latitude;
	console.log('ing from long and lat');
	console.log(longlat);

		yelp.search({term: term,ll:longlat,limit:5}, function(error, data) {

		res.header("Access-Control-Allow-Origin", "*")
  		//console.log(error);
  		console.log(data);
  		res.setHeader('Content-Type', 'application/json');
		res.send(data);
		});

});

app.get('*', function(req, res){
	console.log("404 hit");
	res.header("Access-Control-Allow-Origin", "*")
  res.send('what???', 404);
});

var port = Number(process.env.PORT || 8080);
app.listen(port, function() {
  console.log("Listening on " + port);
});
