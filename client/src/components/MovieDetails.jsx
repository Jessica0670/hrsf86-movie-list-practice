import React from 'react';
//frame each movie item inside divs and insert props
const MovieDetails = (props) => (
	//props onclick = that movies data
		<li id="movieListItem" className={props.className}>
		<span  id="span" onClick={() => props.click()}>
		<img id="img" src="https://d30y9cdsu7xlg0.cloudfront.net/png/5968-200.png" />
		</span>{props.movieData.title}
		</li>

)

//export

export default MovieDetails;