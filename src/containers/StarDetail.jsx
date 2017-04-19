import React, { Component } from 'react';
import { StarInfo, CastList, TrailerList, Poster, MovieList} from '../components';
import { CAST_MAX_NUM, TRAILER_MAX_NUM } from '../const';
import SubTitle from '../components/SubTitle'
import { Grid, Row, Col} from 'react-bootstrap/lib';
import { connect } from 'react-redux';
import { fetchStarDetail, fetchMovieList } from '../actions';

class StarDetail extends Component {

  componentDidMount() {
    const {dispatch} = this.props;
    dispatch(fetchStarDetail(this.props.params.id));
    dispatch(fetchMovieList(this.props.params.id));
  }

  render() {
    const {star, movies} = this.props;

    if(star.hasOwnProperty('id')) {
      return(
        <Grid fluid={false}>
          <Row>
            <Col xs={12} sm={6} md={4}>
              <Poster id={star.id} path={star.profile_path} responsive />
            </Col>
            <Col xs={12} sm={6} md={8}>
              <StarInfo star={star}/>
            </Col>
          </Row>
          <Row>
            <SubTitle title={'Known For'} />
            <MovieList movies={movies.slice(0,4)} />
          </Row>
        </Grid>
      );
    } else
      return null;

  }
}

function mapStateToProps(state){
  const {starDetail, movieList} = state;
  const {item: star} = starDetail;
  const {items: movies} = movieList;

  return {star, movies}
}

export default connect(mapStateToProps)(StarDetail);
