import React from 'react';
import ReactDOM  from 'react-dom';
import Data from '../../database/data.js';
import Movie from './components/Movie.jsx';
import Search from './components/Search.jsx';
import AddMovie from './components/AddMovie.jsx';
// import $ from  'jquery';

class MovieList extends React.Component {
  constructor(props) {
    super(props);
    //set initial state to unwatched
    this.state = {
      watched: false,
      movies: [Data]
    }

  }
  //handle added movie
  //push movie to array in state
  addMovie(e) {
    //create new movie title with id 
    let id = 6;
    let newMovie = {
      title: e.val(),
      id: id++
    }
    Data.push(newMovie);
    console.log('added movie', e.val(), Data)
  }

  //handle click of span to set state of watched to true
  //change css if watched
  //toggle class if watched === true?
  // id= { this.state.watched === false ? "movieListItem" : "movieListItemWatched"}
  handleClick(e) {
    console.log(Data, this.state)
    this.setState({watched: true})
  }

  render() {
    return (
      <div>
        <Search movieData={Data}/>
        <AddMovie
          value={this.state.movies} 
          click={this.addMovie.bind(this)}
          movieData={Data}
        />

      	<Movie 
          value={this.state.watched} 
          click={this.handleClick.bind(this)} 
          movieData={Data}
        />
      
      </div>
    )
  }
}

ReactDOM.render( <MovieList />, document.getElementById('app'));
