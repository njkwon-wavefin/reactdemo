import React , { Component } from 'react';
import ItemList from './ItemList';

class ItemBox extends Component {
  constructor(){
    super();
    this.state = {data:[]};
  }
  componentDidMount() {
    var url ="https://api.themoviedb.org/3/discover/movie";
    var key = "?api_key=4d4ed145d3584846f5922b6a467e1f85";

  fetch(
    url+key
  ).then(response => {
    return response.json();
  }).then(function(json){
    //console.log('json: ' + JSON.stringify(json));
    this.setState({data:json.results});
  }.bind(this)).catch((e) => {
    console.log("Fetch error: " + e);
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

export default ItemBox;
