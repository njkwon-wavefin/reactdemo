import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, FormGroup, FormControl, Button, Image} from 'react-bootstrap/lib';
import TMDBlogo from '../images/themoviedb_green.svg';
import { connect } from 'react-redux';
import { push } from 'react-router-redux'
import { searchMovieList } from '../actions';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = { searchText: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      searchText: e.currentTarget.value
    });
  }

  handleKeyDown(e){
    if(e.key == 'Enter') {
      return this.handleSubmit();
    }
  }

  handleSubmit(){
    this.props.dispatch(push('/search/'+ this.state.searchText));
    this.props.dispatch(searchMovieList(this.state.searchText));
    this.setState({ searchText: ''});
  }

  render(){
  const brandStyle = {
    fontWeight: 'bold',
    textTransform: 'caplitalize',
    paddingLeft: 10,
    fontSize: '1.2em'
  };

  const imgStyle = {
    height: '200%',
    width: 'auto',
    paddingLeft: '10px',
    marginTop: '-8px',
    display: 'inline-block'
  };

    return (
      <Navbar bsStyle='inverse'>
        <Navbar.Header>
      <Navbar.Brand>
        <a href="#"><span style={brandStyle}>{this.props.brand}</span><Image style={imgStyle} src={TMDBlogo}/></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl
              type="text"
              placeholder="Search Movie Title..."
              value={this.state.searchText}
              ref={(input) => this.searchTextInput = input}
              onChange={this.handleChange}
              onKeyPress={this.handleKeyDown}/>
          </FormGroup>
          {' '}
          <Button type="submit" onClick={this.handleSubmit}>Search</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>

    );
  }
}

export default connect()(SearchBar);
