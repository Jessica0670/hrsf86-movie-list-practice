import React from 'react';
import MovieDetails from './MovieDetails.jsx';
const Movie = (props) => (
	<ul>
	{
		props.movieData.map(movie => {
			return <MovieDetails click={props.click} movieData={movie} key={movie.id}/>
		})
	}
	</ul>
);
//map movie details
//export
export default Movie;