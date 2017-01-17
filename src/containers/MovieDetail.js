import React, { Component } from 'react';
import Item from '../components/Item';
import { fetchData } from '../utils';
import { URL_DETAIL, API_KEY } from '../const';

export default class MovieDetail extends Component {
  constructor(props){
    super(props);
    this.state = {
      fetching: false,
      data:{}
    };
  }

  componentDidMount() {
    var url = URL_DETAIL + this.props.params.id + API_KEY;

    fetchData(url).then(data=>{
      this.setState({data:data});
    });
  }

  render() {
    if(Object.keys(this.state.data).length !== 0) {
      return(
        <div>
          <Item item={this.state.data} />
        </div>
      );
    }else{
      return <div>loading...</div>
    }
  }

}
