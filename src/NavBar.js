import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";



export default class NavBar extends Component {

  // constructor (props) {
    // super(props);
    // this.state = {
    //   id: 0
    // }
    // this.setDetail = this.setDetail.bind(this);
  // }

  render() {
    return (
    	<nav>
        <ul>
          <li>Model S</li>
          <li>Model X</li>
          <li>Model 3</li>
          <li>Roadster</li>
        </ul>
        <div className="logo">
          <img src="" />
        </div>
      </nav>
      
    );
  }
}