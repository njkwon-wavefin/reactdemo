import React, { Component } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import './App.css';

class App extends Component {


  render() {
    return(
      <div>
        <Header title="Cinema Paradiso"/>
        <SearchBar brand="Movies" />
        {this.props.children}
      </div>
    );
  }
}

export default App;
