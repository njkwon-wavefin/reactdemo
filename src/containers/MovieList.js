import React, { Component } from 'react';
import {URL_LIST, API_KEY} from '../const';
import ItemList from '../components/ItemList';
import {fetchData} from '../utils';

export default class MovieList extends Component {

  constructor(props){
    super(props);
    this.state = {
      fetching: false,
      data:[]
    };
  }

  componentDidMount() {
    var url = URL_LIST + API_KEY;

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
        <div>
           <ItemList data={this.state.data} />
        </div>
      );
    }else{
      return <div>loading...</div>
    }
  }
}
