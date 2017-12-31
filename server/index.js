const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../database')


app.use(bodyParser.json());
//get static files
app.use(express.static(path.join(__dirname, '../client/dist')));
//get all from database
app.get('/movies', function(req, res) {
	//use selectAll
	db.selectAll(function(err, results) {
		if(err) {
			res.status(500).send(err)
		} else {
			res.status(200).json(results).end();
		}
	})
})
//create post
app.post('/movies', function(req, res) {
	//new movie
	let newMovie = [req.body.title, 0]
	//use insertMovie
	db.insertMovie(newMovie, function(err) {
		if(err) {
			res.status(500).send(err)
		} else {
			res.status(200).end();
		}
	})
})
// listen on port 3000
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




