const mysql = require('mysql');

//create connection
let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ''
});

//connect
connection.connect(function(err) {
	if(err) {
		console.log(err)
	} else {
		console.log('connected!')
	}
});

let insertMovie = (data, cb) => {
	let query = 'INSERT INTO movies (title, watched) values (?, ?)';
	connection.query(query, [...data], (err) => {
		if(err) {
			cb(err)
		} else {
			cb(null)
		}
	})
};

let selectAll = (cb) => {
	let query = 'SELECT * FROM movies';
	connection.query(query, (err, results) => {
		if(err) {
			cb(err)
		} else {
			cb(results)
		}
	});
}

module.exports = {
	selectAll: selectAll,
	insertMovie: insertMovie
}