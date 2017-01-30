import React, { Component } from 'react';
import {URL_LIST, API_KEY} from '../const';
import MovieList from '../components/MovieList';
import {fetchData} from '../utils';
import {Grid, Row} from 'react-bootstrap/lib';
import {connect} from 'react-redux';
import {fetchMovieList} from '../actions';

class MovieContainer extends Component {

  constructor(props){
    super(props);
    /*
    this.state = {
      fetching: false,
      data:[]
    };
    */
  }

  componentDidMount() {
    const {dispatch, movieLsit} = this.props;
    dispatch(fetchMovieList());
    /*
    const url = URL_LIST + API_KEY;

    fetchData(url)
    .then(data => {
      return data.results;
    }).then(data=>{
      this.setState({data:data});
    });
    */
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
    /*
    if(Object.keys(this.state.data).length !== 0) {
      return (
        <Grid fluid={this.props.fluid}>
          <Row>
            <MovieList movies={this.state.data} />
          </Row>
        </Grid>
      );
    }else{
      return null;
    }
    */
  }

} // end of class

function mapStateToProps(state){
  const {movieList} = state;
  const {isFetcing, items: movies, error} = movieList;

  return {isFetcing, movies}
}

export default connect(mapStateToProps)(MovieContainer);
