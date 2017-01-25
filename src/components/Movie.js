import React , { Component } from 'react';
import {URL_IMG, IMG_SIZE_LARGE} from '../const';
import {Image, Glyphicon} from 'react-bootstrap';

export default class Movie extends Component{
  render(){
    return(
        <div></div>
    );
  }
}

export function MoviePoster(props){
  return(
    <Image key={props.movie.id} src={URL_IMG+IMG_SIZE_LARGE+props.movie.poster_path} alt={props.movie.title} responsive />
  );
}

export function MovieTitle(props){
  const style = {
    fontSize : 22
  }
  return(
    <div style={style}>
      {props.title}
    </div>
  );
}

export function MovieRate(props){
  return(
    <div>
      <Glyphicon glyph="star" />{props.rate}
    </div>
  );
}

export function MovieVote(props){
  return(
    <div>
      <Glyphicon glyph="heart" />{props.vote}
    </div>
  );
}

export function MovieYear(props){
  return(
    <div>
      {props.year}
    </div>
  );
}

export function MovieOverview(props){
  return(
    <div>
      {props.overview}
    </div>
  );
}
