import React from 'react';
//frame each movie item inside divs and insert props
const MovieDetails = (props) => (
	//props onclick = that movies data
 
		<li id="movieListItem"><span  onClick={() => console.log(props.click())}>X</span>{props.movieData.title}</li>

)

//export

export default MovieDetails;