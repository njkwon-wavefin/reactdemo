import React , { Component } from 'react';
import ItemList from './ItemList';
import {fetchData} from '../utils';

class ItemContainer extends Component {
  constructor(props){
    super(props);
    this.state = {data:[]};
  }

  componentDidMount() {
    var url ="https://api.themoviedb.org/3/discover/movie";
    fetchData(url, data=>{
      this.setState({data:data});
    });
  }

  render() {
    return (
      <div>
         <ItemList data={this.state.data} />
      </div>
    );
  }
}

export default ItemContainer;
