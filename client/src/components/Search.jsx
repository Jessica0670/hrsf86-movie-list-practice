import React from 'react';

const Search = (props) => (
	<div>
		<input className="searchBar" type='text' name='movieSearchBar' placeholder="What movie do you want?"/>
		<input type='submit' name='submitButton' value="Submit" />
	</div>
)

export default Search;