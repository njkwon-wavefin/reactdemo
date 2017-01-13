import React, { Component } from 'react';
import Item from '../components/Item';
import {fetchData} from '../utils';

export default class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {data:{}};
  }

  componentDidMount() {
    var url ="https://api.themoviedb.org/3/movie/"+this.props.params.id;
    fetchData(url, data=>{
      this.setState({data:data});
    });
  }


  render() {
    return(
      <div>
        <p>Item Detail</p>
        <Item item={this.state.data} />
      </div>
    );
  }

}
