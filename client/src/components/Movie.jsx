import React from 'react';
import MovieDetails from './MovieDetails.jsx';
const Movie = (props) => (
	<ul>
	{
		props.movieData.map(movie => {
			return <MovieDetails 
			className={props.className}
			value={props.value}
			click={props.click} 
			movieData={movie} 
			key={movie.id}/>
		})
	}
	</ul>
);
//map movie details
//export
export default Movie;