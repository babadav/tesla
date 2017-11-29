import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero.js';
import ThreeD from './ThreeD';
import Features from './Features';



export default class Overview extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    console.log(this.props.page);
    return (
    	<div>
        <Hero image={this.props.data.hero} summary={this.props.data.summary}/>
        <ThreeD image={this.props.data.threeD} style={this.props.page  ? { display:'block',} : {display : 'none',} } />
        <Features data={this.props.data.modules} name={this.props.data.name} />
      </div>
      
    );
  }
}
