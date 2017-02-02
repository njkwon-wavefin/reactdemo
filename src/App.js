import React, { Component } from 'react';
import SearchBar from './components/SearchBar';
import './App.css';
import { connect } from 'react-redux';
import { searchMovieList } from './actions';


export default class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   searchText: ''
    // };

    //this.handleUserInput = this.handleUserInput.bind(this);
  }
/*
  handleUserInput(searchText){
    console.log("received text: " + searchText);
    // this.setState({
    //   searchText: searchText
    // });
  }
*/
  render() {
    return(
      <div>
        <SearchBar brand="MovieBox" searchText={''} />
        {this.props.children}
      </div>
    );
  }
}
/*
function mapDispatchToProps(dispatch){
    return {
      handleUserInput: () => dispatch(searchMovieList('h'));
    }
}

export default connect(mapDispatchToProps)(App);
*/
