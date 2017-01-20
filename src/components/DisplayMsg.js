import React , { Component } from 'react';

 export default class DisplayMsg extends Component {

  render(){
    if(!this.props.hasOwnProperty('message')){
      return(<div>Not Found</div>);
    } else  {
      return(<div>{this.props.message}</div>);
    }
  }
}
