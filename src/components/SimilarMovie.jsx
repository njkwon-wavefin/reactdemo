import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, POSTER_SIZE_SMALL } from '../const';

export default function SimilarMovie({similarMovie}) {
  return (
    <Thumbnail src={URL_IMG+POSTER_SIZE_SMALL+similarMovie.poster_path} alt={similarMovie.name} >
      <p>{similarMovie.name}</p>
    </Thumbnail>
  );
}

SimilarMovie.propTypes = {
  similarMovie: React.PropTypes.shape({
    poster_path: React.PropTypes.string.isRequired,
    name: React.PropTypes.string.isRequired,
  })
};

