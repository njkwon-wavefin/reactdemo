import React , { Component } from 'react';
import {MoviePoster} from './Movie';
import {Link} from 'react-router';

export default class MovieList extends Component{
  render() {
    var movies = this.props.data.map(function(movie) {
      return(
          <Link to={'/movie/'+movie.id} key={movie.id} ><MoviePoster movie={movie} /></Link>
      );
    });

    return(
      <div>
        {movies}
      </div>
    );
  }
}
