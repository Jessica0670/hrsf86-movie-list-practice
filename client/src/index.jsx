import React from 'react';
import ReactDOM  from 'react-dom';
import Data from '../../database/data.js';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <Search movieData={Data}/>
        <AddMovie movieData={Data}/>
      	<Movie movieData={Data}/>
      
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
