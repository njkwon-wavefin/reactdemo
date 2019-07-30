import React from 'react';
import Cast from './Cast';
import {Link} from 'react-router';
import { Row, Col } from 'react-bootstrap';
import styled from 'styled-components';

export default function CastList({data}) {
  const StyledLink = styled(Link)`
    &:hover {
      text-decoration:none;
    }
  `;
    var casts = data.map(function(cast) {
      if(cast.profile_path != null) {
        return(
          <Col xs={12} sm={6} md={3} key={cast.id} >
            <StyledLink to={'/star/'+cast.id} ><Cast cast={cast} /></StyledLink>
          </Col>
        );
     }
    });

    return(
      <div>
        <Row>
          <h3>Casts</h3>
        </Row>
        <Row>
          {casts}
        </Row>
      </div>
    );
}
