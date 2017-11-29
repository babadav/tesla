import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Features from './Features';
import CarSelection from './CarSelection';
import Hero from './Hero';

const HeroStyle = styled.div`
  width: 100%; 
  height: 100vh;
  

`

export default class Home extends Component {

  constructor (props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Hero homeVideo={this.props.video} />
        <Features data={this.props.features} />
        <CarSelection data= {this.props.select}  />
      </div>
    );
  }
}

        