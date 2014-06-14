
var express = require('express');
var app = express();


var yelp = require("yelp").createClient({
	  consumer_key: "oX2sb_xE-GeTSb-_bdRvNQ", 
	  consumer_secret: "R0f-oxU75q47LGK05beLY6uOJDQ",
	  token: "dM_EefXlYbxguf6hWzIyq6LovaMeUuFa",
	  token_secret: "kUSpqYdyG63fsowdaBrQLZSzGsA"
		});




app.get('/yelp/search/:term/city/:city', function(req, res) {

	var term=req.params.term;
	var city=req.params.city;

	yelp.search({term: term, location: city}, function(error, data) {
		console.log(req.params.term);
		console.log(req.params.city);
  		//console.log(error);
  		//console.log(data);
  		res.setHeader('Content-Type', 'application/json');
		res.send(data);
		});


  //res.type('text/plain'); // set content-type
  //res.send('i am a beautiful butterfly'+results); // send text response
});

app.listen(process.env.PORT || 4730);
