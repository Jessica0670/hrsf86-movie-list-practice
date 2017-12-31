import React from 'react';
import ReactDOM  from 'react-dom';
import Data from '../../database/data.js';
import Movie from './components/Movie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
      	<Movie movieData={Data}/>
      
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
