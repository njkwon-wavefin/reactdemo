import React , { Component } from 'react';
import {MoviePoster} from './Movie';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class MovieList extends Component{
  render() {
    let movies = this.props.movies.filter(function(movie) {
      return movie.poster_path != null;
    }).map(function(movie) {
        return(
            <Col xs={6} sm={4} md={3} key={movie.id} >
            <Link to={'/movie/'+movie.id} ><MoviePoster movie={movie} responsive /></Link>
          </Col>
        );
    });

    return(
      <Grid fluid={false}>
        <Row>
          {movies}
        </Row>
      </Grid>
    );
  }
}
