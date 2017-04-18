import React , { Component } from 'react';
import { URL_IMG, IMG_SIZE_LARGE } from '../const';
import { Image } from 'react-bootstrap';

export default function Poster(props){
  return(
    <Image key={props.id} src={URL_IMG+IMG_SIZE_LARGE+props.path} responsive />
  );
}
