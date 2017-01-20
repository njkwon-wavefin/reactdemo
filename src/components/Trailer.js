import React , { Component } from 'react';
import {URL_YOUTUBE} from '../const';

export default class Trailer extends Component{
  render(){

    return(
        <iframe src={URL_YOUTUBE+this.props.trailer.key} allowFullScreen />
    );
  }
}
