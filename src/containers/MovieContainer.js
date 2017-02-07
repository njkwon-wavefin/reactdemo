import React, { Component } from 'react';
import { MovieList, DisplayMsg} from '../components';
import { Grid, Row } from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import { fetchMovieList } from '../actions';

class MovieContainer extends Component {

  constructor(props){
    super(props);
  }

  componentDidMount() {
    if(!this.props.params.keyword){
      const {dispatch} = this.props;
      dispatch(fetchMovieList());
    }
  }

  render() {
    const {movies} = this.props;
    if(movies.length > 0) {
      return(
            <MovieList movies={movies} />
      );
    } else
      return (<DisplayMsg />);
  }
}

function mapStateToProps(state){
  const {movieList} = state;
  const {isFetcing_movieList, items: movies, error_movieList} = movieList;

  return {movies}
}

export default connect(mapStateToProps)(MovieContainer);
