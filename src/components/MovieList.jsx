import React , { Component } from 'react';
import Poster from './Poster';
import {Link} from 'react-router';
import { Grid, Row, Col} from 'react-bootstrap';

export default class MovieList extends Component{

  render() {
  const style={
	display: 'flex',
	flexWrap: 'wrap'
  }

    let movies = this.props.movies.filter(function(movie) {
      return movie.poster_path != null;
    }).map(function(movie) {
        return(
            <Col xs={6} sm={4} md={3} key={movie.id} >
            <Link to={'/movie/'+movie.id} ><Poster id={movie.id} path={movie.poster_path} responsive /></Link>
          </Col>
        );
    });

    return(
      <Grid fluid={false}>
        <Row style={style}>
          {movies}
        </Row>
      </Grid>
    );
  }
}
