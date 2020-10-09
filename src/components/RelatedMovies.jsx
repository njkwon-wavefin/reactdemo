import React from 'react';
import {Link} from 'react-router';
import { Col } from 'react-bootstrap';
import styled from 'styled-components';
import RelatedMovie from "./RelatedMovie";

export default function RelatedMovies({data}) {
    const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;
  console.log(data)
  let movies = data.map(function(movie) {
    // console.log("movie", movie)
    if(movie.backdrop_path != null) {
      return(
        <Col xs={4} sm={3} md={2}   key={movie.id}  >
          <StyledLink to={'/movie/'+movie.id} ><RelatedMovie movie={movie} /></StyledLink>
        </Col>
      );
    }

    return null;
  });
  return(
    <div >
      <h3>Similar movies</h3>
      <div className="d-flex flex-wrap">
      {movies}
      </div>
      
    </div>
  );
}
