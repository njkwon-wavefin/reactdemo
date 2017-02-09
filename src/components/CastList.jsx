import React from 'react';
import Cast from './Cast';
import { Col } from 'react-bootstrap';

export default function CastList({data}) {
    var casts = data.map(function(cast) {
      if(cast.profile_path != null) {
        return(
          <Col xs={4} sm={3} md={2} key={cast.id} >
            <Cast cast={cast} />
          </Col>
        );
     }
    });

    return(
      <div>
        <h3>Casts</h3>
        {casts}
      </div>
    );
}
