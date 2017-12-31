import React from 'react';

const Search = (props) => (
	<div id="searchDiv">
		<input className="searchBar" type='text' name='movieSearchBar' placeholder="What movie do you want?"/>
		<input className="submit" type='submit' name='submitButton' value="Submit" />
	</div>
)

export default Search;