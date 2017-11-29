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
    console.log(this.props.data.page.modules);
    return (
    	<div>
        <Hero image={this.props.data.page.hero}/>
        <ThreeD image={this.props.data.page.threeD} />
        <Features data={this.props.data.page.modules} name={this.props.data.name} />
      </div>
      
    );
  }
}