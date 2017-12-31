import React from 'react';

const Search = (props) => (
	<form id="searchForm">
		<input type='text' name='movieSearchBar' placeholder="What movie do you want?"/>
		<input type='submit' name='submitButton' value="Submit" />
	</form>
)

export default Search;