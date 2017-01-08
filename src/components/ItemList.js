import React , { Component } from 'react';
import Item from './Item';

class ItemList extends Component{
  
  render() {
    var items = this.props.data.map(function(item) {
      return(
          <Item key={item.id} item={item} />
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
