import React , { Component } from 'react';

class ItemList extends Component{

  render() {
    var imgUrl = "https://image.tmdb.org/t/p/";
    var imgSize = "w185";

    var items = this.props.data.map(function(item) {
      return(
          <img src={imgUrl+imgSize+item.poster_path} />
      );
    });
    return(
      <div>
        {items}
      </div>
    );
  }
}

export default ItemList;
