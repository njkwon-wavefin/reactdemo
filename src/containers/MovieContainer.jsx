import React, { Component } from 'react';
import { MovieList, DisplayMsg} from '../components';
import { connect } from 'react-redux';
import { fetchMovieList, searchMovieList } from '../actions';

class MovieContainer extends Component {

  componentDidMount() {
     if(!this.props.params.keyword){
      const {dispatch} = this.props;
      dispatch(fetchMovieList());
     }
  }

  componentWillReceiveProps(nextProps) {
     const {dispatch} = this.props;
       if(nextProps.params.keyword && this.props.params.keyword !== nextProps.params.keyword) {
           dispatch(searchMovieList(nextProps.params.keyword));
        }
  }


  shouldComponentUpdate(nextProps, nextState){
      if(this.props.movies !== nextProps.movies) {
        return true;
      }
      return false;
  }

  render() {

    const {movies} = this.props;
    if(movies.length > 0) {
      return(
            <MovieList movies={movies} />
      );
    } else {
      return (<DisplayMsg />);
    }
  }
}

function mapStateToProps(state, ownProps){
  const {movieList} = state;
  const {items: movies} = movieList;

  const keyword = ownProps.params.keyword;
  return {movies, keyword}
}

export default connect(mapStateToProps)(MovieContainer);
