import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      searchText: ''
    };

    this.handleUserInput = this.handleUserInput.bind(this);
  }

  handleUserInput(searchText){
    console.log("received text: " + searchText);
    this.setState({
      searchText: searchText
    });
  }

  render() {
    return(
      <div>
        <SearchBar brand="MovieBox" searchText={this.state.searchText} onUserInput={this.handleUserInput}/>
        {this.props.children}
      </div>
    );
  }
}
