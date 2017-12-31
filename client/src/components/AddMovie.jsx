import React from 'react';

const AddMovie = (props) => (
	<form id="addForm">
		<input type='text' name='movieSearchBar' placeholder="Add movie here..."/>
		<input type='submit' name='submitButton' value="Submit" />
	</form>
)

export default AddMovie;