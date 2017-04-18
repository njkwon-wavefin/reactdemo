import React from 'react';
import { Glyphicon } from 'react-bootstrap';

export default function SubTitleWithIcon(props){
  return(
      <h3><Glyphicon glyph={props.icon} /> {props.title}</h3>
  );
}
