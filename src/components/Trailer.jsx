import React from 'react';
import { URL_YOUTUBE } from '../const';

export default function Trailer({trailer}) {
  return <iframe src={URL_YOUTUBE + trailer} allowFullScreen />;
}

Trailer.propTypes = {
  trailer: React.PropTypes.string.isRequired,
};
