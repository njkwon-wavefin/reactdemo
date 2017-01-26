import React from 'react';
import {Navbar, FormGroup, FormControl, Button, Image} from 'react-bootstrap/lib';
import TMDBlogo from '../images/themoviedb_green.svg';

export default function SearchBar(props) {
  const style = {
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
        <a href="#"><span style={style}>{props.brand}</span><Image style={imgStyle} src={TMDBlogo}/></a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Form pullRight>
          <FormGroup>
            <FormControl type="text" placeholder="Search Movie Title..." />
          </FormGroup>
          {' '}
          <Button type="submit">Search</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>

    );
}
