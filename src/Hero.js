import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Features from './Features';
import CarSelection from './CarSelection';
import NavBar from './NavBar';

const HeroStyle = styled.div`
	
background: black; width: 100%; height: 100vh;

`

const H1Style = styled.h1 `
	color:white;


`

export default class Hero extends Component {

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
	    	<HeroStyle>
	    	<H1Style>Hello World</H1Style>
	    	</HeroStyle>
    	</div>
    );
  }
}