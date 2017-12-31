import React from 'react';

const AddMovie = (props) => (
	<div id="addDiv">
		<input type='text' className="addMovieBar" name='addMovieBar' placeholder="Add movie here..."/>
		<input className="submit" onClick={() => props.click($('.addMovieBar'))} type='submit' name='submitButton' value="Submit" />
	</div>
)

export default AddMovie;