import React , { Component } from 'react';
import './Header.css';

/*
class Header extends Component {
  render(){
    return(<div className="Header">{this.props.title}</div>);
  }
}
*/

function Header(props){
  return (<div className="Header">{props.title}</div>);
}
export default Header;
