import React , { Component } from 'react';
import Item from './Item';
import {Link} from 'react-router';

class ItemList extends Component{
  render() {
    var items = this.props.data.map(function(item) {
      return(
          <Link to ={'/movie/'+item.id} key={item.id} ><Item item={item} /></Link>
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
