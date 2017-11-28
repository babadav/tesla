import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero.js';
import ThreeD from './ThreeD';
import Features from './Features';
import Info from './Info';


export default class Overview extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    console.log(this.props);
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