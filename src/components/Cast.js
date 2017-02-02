import React , { Component } from 'react';
import {Thumbnail} from 'react-bootstrap/lib';
import {URL_IMG, IMG_SIZE_SMALL} from '../const';


export default class Cast extends Component{
  render(){
      return(
          <Thumbnail src={URL_IMG+IMG_SIZE_SMALL+this.props.cast.profile_path} alt={this.props.cast.name} >
            <p>{this.props.cast.name}</p>
          </Thumbnail>
      );
  }
}
