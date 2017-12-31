import React from 'react';
import ReactDOM  from 'react-dom';
import Data from '../../database/data.js';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    //set initial state to unwatched
    this.state = {
      watched: false
    }

  }

  //handle click of span to set state of watched to true
  //change css if watched
  handleClick(e) {
    console.log('hi')
  }

  render() {
    return (
      <div>
        <Search movieData={Data}/>
        <AddMovie movieData={Data}/>
      	<Movie click={this.handleClick.bind(this)} movieData={Data}/>
      
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
