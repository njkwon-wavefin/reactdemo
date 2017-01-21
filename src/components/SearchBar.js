import React from 'react';
import {Navbar, FormGroup, FormControl, Button} from 'react-bootstrap/lib';

export default function SearchBar(props) {
    return (
      <Navbar>
        <Navbar.Header>
      <Navbar.Brand>
        <a href="#">{props.brand}</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
        <Navbar.Collapse>
        <Navbar.Form pullLeft>
          <FormGroup>
            <FormControl type="text" placeholder="Search Movie Title..." />
          </FormGroup>
          {' '}
          <Button type="submit">Submit</Button>
        </Navbar.Form>
      </Navbar.Collapse>
    </Navbar>

    );
}
