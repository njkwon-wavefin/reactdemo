import React, { Component } from 'react';
import SearchBar from './containers/SearchBar';
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <SearchBar brand="MovieBox" searchText={''} />
        {this.props.children}
      </div>
    );
  }
}
