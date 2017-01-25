import React , { Component } from 'react';
import {MovieTitle, MovieRate, MovieVote, MovieYear, MovieOverview } from './Movie';
import {Row, Col} from 'react-bootstrap';

export default class MovieInfo extends Component{
  render(){
    return(
      <div>
        <Row>
          <MovieTitle title={this.props.movie.title} />
        </Row>
        <Row>
          <Col xs={3}>
            <MovieRate rate={this.props.movie.vote_average} />
          </Col>
          <Col xs={3}>
            <MovieVote vote={this.props.movie.vote_count} />
          </Col>
          <Col xs={3}>
            <MovieYear year={this.props.movie.release_date.substring(0,4)} />
          </Col>
        </Row>
        <Row>
          <MovieOverview overview={this.props.movie.overview} />
        </Row>
      </div>
    );
  }
}
