import React , { Component } from 'react';
import {URL_IMG, IMG_SIZE} from '../const';

export default class Cast extends Component{
  render(){

    return(
        <img key={this.props.cast.id} src={URL_IMG+IMG_SIZE+this.props.cast.profile_path} alt={this.props.cast.name} />
    );
  }
}
