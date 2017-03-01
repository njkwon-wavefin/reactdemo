import React from 'react';
import { URL_YOUTUBE } from '../const';

/**
 * Represents a trailer 
 * @param {string} trailer - the address of trailer for YouTube api
 */
export default function Trailer({trailer}) {
  return <iframe src={URL_YOUTUBE + trailer} allowFullScreen />;
}

Trailer.propTypes = {
  trailer: React.PropTypes.string.isRequired,
};
