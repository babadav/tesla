import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero';


export default class App extends Component {

  // constructor (props) {
    // super(props);
    // this.state = {
    //   id: 0
    // }
    // this.setDetail = this.setDetail.bind(this);
  // }

  render() {
    return (
    	<div>
        <Hero />
      </div>
      
    );
  }
}