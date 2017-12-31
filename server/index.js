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
	
})
//create post
app.post('/movies', function(req, res) {
	console.log('post')
})
// listen on port 3000
app.listen(3000, function () { console.log('MovieList app listening on port 3000!') });




