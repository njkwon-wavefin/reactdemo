import React , { Component } from 'react';
import {MoviePoster} from './Movie';
import {Link} from 'react-router';
import {Col} from 'react-bootstrap';

export default class MovieList extends Component{
  render() {
    var movies = this.props.data.map(function(movie) {
      return(
          <Col xs={6} sm={4} md={3} key={movie.id} >
          <Link to={'/movie/'+movie.id} ><MoviePoster movie={movie} responsive={true}/></Link>
        </Col>
      );
    });

    return(
      <div>
        {movies}
      </div>
    );
  }
}
