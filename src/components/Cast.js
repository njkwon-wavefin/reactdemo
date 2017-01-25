import React , { Component } from 'react';
import {Image} from 'react-bootstrap/lib';
import {URL_IMG, IMG_SIZE_SMALL} from '../const';

export default class Cast extends Component{
  render(){

    return(
        <Image key={this.props.cast.id} src={URL_IMG+IMG_SIZE_SMALL+this.props.cast.profile_path} alt={this.props.cast.name} rounded />
    );
  }
}
