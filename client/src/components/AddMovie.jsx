import React from 'react';

const AddMovie = (props) => (
	<div>
		<input type='text' className="addMovieBar" name='addMovieBar' placeholder="Add movie here..."/>
		<input onClick={() => props.click($('.addMovieBar'))} type='submit' name='submitButton' value="Submit" />
	</div>
)

export default AddMovie;