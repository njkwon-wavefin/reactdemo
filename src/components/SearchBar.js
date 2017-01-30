import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import {Navbar, FormGroup, FormControl, Button, Image} from 'react-bootstrap/lib';
import TMDBlogo from '../images/themoviedb_green.svg';

export default class SearchBar extends Component {
  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(){
    console.log('input: ' + ReactDOM.findDOMNode(this.searchTextInput).value);
    this.props.onUserInput(ReactDOM.findDOMNode(this.searchTextInput).value);
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
              value={this.props.searchText}
              ref={(input) => this.searchTextInput = input}
              onChange= {this.handleChange} />
          </FormGroup>
          {' '}
          <Button type="submit">Search</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>

    );
  }
}
