import React, { Component } from 'react';
import MovieList from '../components/MovieList';
import { fetchData } from '../utils';
import { Grid, Row } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import { fetchMovieList } from '../actions';

class MovieContainer extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchMovieList());
  }

  render() {
    const {movies} = this.props;
    if(movies.length > 0) {
      return(
        <Grid fluid={true}>
          <Row>
            <MovieList movies={movies} />
          </Row>
        </Grid>
      );
    } else
      return null;
  }
}

function mapStateToProps(state){
  const {movieList} = state;
  const {isFetcing_movieList, items: movies, error_movieList} = movieList;

  return {movies}
}

export default connect(mapStateToProps)(MovieContainer);
