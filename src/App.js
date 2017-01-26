import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

export default class App extends Component {
  render() {
    return(
      <div>
        <SearchBar brand="Cinema Paradiso" />
        {this.props.children}
      </div>
    );
  }
}
