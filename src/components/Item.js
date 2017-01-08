import React , { Component } from 'react';

class Item extends Component{
  constructor(props){
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(){
    alert('Item clicked');
  }

  render(){
    var imgUrl = "https://image.tmdb.org/t/p/";
    var imgSize = "w185";

    return(
        <img key={this.props.item.id} src={imgUrl+imgSize+this.props.item.poster_path} alt={this.props.item.title} onClick={this.handleClick}  />
    );

  }
}

export default Item;
