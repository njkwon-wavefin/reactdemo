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
    <Image key={props.movie.id} src={URL_IMG+IMG_SIZE_LARGE+props.movie.poster_path} alt={props.movie.title} responsive={props.responsive} />
  );
}

export function MovieTitle(props){
  const style = {
    fontWeight: 'bold',
    textTransform: 'uppercase'
  };
  return(
    <h1 style={style}> {props.title} </h1>
  );
}

export function MovieRate(props){
  return(
      <h3><Glyphicon glyph="star" /> {props.rate}</h3>
  );
}

export function MovieVote(props){
  return(
      <h3><Glyphicon glyph="heart" /> {props.vote}</h3>
  );
}

export function MovieYear(props){
  return(
    <h3>{props.year}</h3>
  );
}

export function MovieGenre(props){
  const style = {
    fontSize: '1.6em'
  };

  return(
    <div style={style}>
      {props.genre}
    </div>
  );
}

export function MovieOverview(props){
  return(
    <div>
    <h3>Overview</h3>
    <p>
      {props.overview}
    </p>
    </div>
  );
}
