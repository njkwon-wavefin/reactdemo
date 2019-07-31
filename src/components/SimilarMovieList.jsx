import React from 'react';
import SimilarMovie from './SimilarMovie';
import {Link} from 'react-router';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function SimilarMovieList({data}) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;
    var similarMovies = data.map(function(similarMovie) {
      console.log(similarMovie)
      if(similarMovie.poster_path != null) {
        return(
          <Col xs={12} sm={6} md={4} key={similarMovie.id} >
            <StyledLink to={'/movie/'+similarMovie.id} ><SimilarMovie similarMovie={similarMovie} /></StyledLink>
          </Col>
        );
     }
    });

    return(
      <div>
        <Row>
          <h3>Similar Movies</h3>
        </Row>
        <Row>
          {similarMovies}
        </Row>
      </div>
    );
}

