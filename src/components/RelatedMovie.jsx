import React from 'react';
import { Thumbnail } from 'react-bootstrap/lib';
import { URL_IMG, IMG_SIZE_XSMALL } from '../const';


export default function RelatedMovie({movie}) {
    // console.log("path",cast.profile_path)
    return (
      <Thumbnail src={URL_IMG+IMG_SIZE_XSMALL+movie.backdrop_path} alt={movie.original_title}   >
        <p>{movie.original_title}</p>
      </Thumbnail>
    );
}


RelatedMovie.propTypes = {
    movie: React.PropTypes.shape({
      backdrop_path: React.PropTypes.string.isRequired,
      original_title: React.PropTypes.string.isRequired,
    })
  };
  