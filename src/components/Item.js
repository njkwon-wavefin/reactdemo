import React , { Component } from 'react';
import {Link} from 'react-router';

function getImg(id,path,desc){
  var imgUrl = "https://image.tmdb.org/t/p/";
  var imgSize = "w185";

  return(
      <Link to='/${id}'><img key={id} src={imgUrl+imgSize+path} alt={desc}  /></Link>
  );
}

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
    var imgSize = "w185/";

    return(
        <Link to={'/movie/'+this.props.item.id}><img key={this.props.item.id} src={imgUrl+imgSize+this.props.item.poster_path} alt={this.props.item.title} /></Link>
    );

    /*
    return(getImg(this.props.item.id,this.props.item.poster_path,this.props.item.title ));
    */
  }
}

export default Item;
