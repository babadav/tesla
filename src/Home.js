import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Features from './Features';
import CarSelection from './CarSelection';
import Hero from './Hero';
import {Info} from './Info';

const HeroStyle = styled.div`
  width: 100%; 
  height: 100vh;
  

`

export default class Home extends Component {

  constructor (props) {
    super(props);
    this.state = Info;
  }

  render() {
    return (
      <div>
        <Hero />
        <Features />
        <CarSelection data = {this.state} />
      </div>
    );
  }
}