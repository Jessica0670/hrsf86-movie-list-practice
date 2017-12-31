import React from 'react';
//frame each movie item inside divs and insert props
const MovieDetails = (props) => (
	// console.log(props, 'props')
 
		<li>{props.movieData.title}</li>

)

//export

export default MovieDetails;