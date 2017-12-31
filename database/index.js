const mysql = require('mysql');

//initiate connection
let connection = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: ''
});

connection.connect(function(err) {
	if(err) {
		console.log(err)
	} else {
		console.log('connected!')
	}
})

module.exports = {
	selectAll: selectAll,
	selectMovie: selectMovie
}