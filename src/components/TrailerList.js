import React , { Component } from 'react';
import Trailer from './Trailer';

class TrailerList extends Component{
  render() {
    var trailers = this.props.data.map(function(trailer) {
      return(
          <Trailer key={trailer.id} trailer={trailer} />
      );
    });

    return(
      <div>
        {trailers}
      </div>
    );
  }
}

export default TrailerList;
