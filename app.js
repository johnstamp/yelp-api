
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

	yelp.search({term: term, location: location,sort:"2"}, function(error, data) {
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

	yelp.search({category: category, location: location}, function(error, data) {
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


app.get('/yelp/search/:term/longtitude/:long/latitude/:lat', function(req, res) {

	var term=req.params.term;
	var longtitude=req.params.long;
	var latitude=req.params.lat;

		yelp.search({term: term, longtitude:longtitude,latitude:latitude}, function(error, data) {
		console.log(req.params.term);
		console.log(data);
		res.header("Access-Control-Allow-Origin", "*")
  		//console.log(error);
  		//console.log(data);
  		res.setHeader('Content-Type', 'application/json');
		res.send(data);
		});

});
app.listen(process.env.PORT || 8080);
