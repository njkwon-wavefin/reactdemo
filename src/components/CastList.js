import React , { Component } from 'react';
import Cast from './Cast';

class CastList extends Component{
  render() {
    var casts = this.props.data.map(function(cast) {
      return(
          <Cast key={cast.id} cast={cast} />
      );
    });

    return(
      <div>
        {casts}
      </div>
    );
  }
}

export default CastList;
