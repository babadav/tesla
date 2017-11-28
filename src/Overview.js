import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero.js';
import ThreeD from './ThreeD';
import Features from './Features';


export default class CarPage extends Component {

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
        <h3>This is the summary that will be replaced</h3>
        <ThreeD />
        <Features />
      </div>
      
    );
  }
}