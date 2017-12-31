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
      watched: false,
      movies: [Data.movies]
    }

  }
  //handle added movie
  //push movie to array in state

  //handle click of span to set state of watched to true
  //change css if watched
  handleClick(e) {
    console.log('hi', e)
  }

  render() {
    return (
      <div>
        <Search movieData={Data}/>
        <AddMovie movieData={Data}/>
      	<Movie value={this.state.watched} click={this.handleClick.bind(this)} movieData={Data}/>
      
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
