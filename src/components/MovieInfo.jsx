import React from 'react';
import {MovieTitle, MovieRate, MovieVote, MovieYear, MovieGenre, MovieOverview } from './Movie';
import {Row, Col} from 'react-bootstrap';

export default function MovieInfo(props){
  const style = {
    paddingLeft: '15px'
  };

    return(
      <div style={style}>
        <Row>
          <MovieTitle title={props.movie.title} />
        </Row>
        <Row>
          <MovieGenre genre={props.movie.genre} />
        </Row>
        <Row>
          <Col xs={4}>
            <MovieRate rate={props.movie.vote_average} />
          </Col>
          <Col xs={4}>
            <MovieVote vote={props.movie.vote_count} />
          </Col>
          <Col xs={4}>
            <MovieYear year={props.movie.release_date.substring(0,4)} />
          </Col>
        </Row>
        <Row>
          <MovieOverview overview={props.movie.overview} />
        </Row>
      </div>
    );
}
