import React from 'react';
import { Glyphicon } from 'react-bootstrap'
import styled from 'styled-components'

export default function SubTitleWithIcon(props){
  return(
      <h4><Glyphicon glyph={props.icon} /> {props.title}</h4>
  );
}
