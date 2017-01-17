import React, { Component } from 'react';
import ItemContainer from '../components/ItemContainer';
import {URL_LIST, API_KEY} from '../const';

export default class MovieList extends Component {

  render(){
    var url = URL_LIST + API_KEY;
    return(
      <div>
        <ItemContainer url={url}/>
      </div>
    );
  }

}
