import React, { Component } from 'react';
import {URL_LIST, API_KEY} from '../const';
import MovieList from '../components/MovieList';
import {fetchData} from '../utils';
import {Grid, Row} from 'react-bootstrap/lib';

export default class MovieContainer extends Component {

  constructor(props){
    super(props);
    this.state = {
      fetching: false,
      data:[]
    };
  }

  componentDidMount() {
    const url = URL_LIST + API_KEY;

    fetchData(url)
    .then(data => {
      return data.results;
    }).then(data=>{
      this.setState({data:data});
    });
  }

  render() {
    if(Object.keys(this.state.data).length !== 0) {
      return (
        <Grid fluid={this.props.fluid}>
          <Row>
            <MovieList data={this.state.data} />
          </Row>
        </Grid>
      );
    }else{
      return null;
    }
  }
}
