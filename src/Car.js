import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

const LgImage = styled.img`
  width: 100vw;
  

`

export default class Car extends Component {

  constructor (props) {
	super(props);
  }
  render(){
  	console.log(this.props);
  	return(

  		<div> 
  			<h1>{this.props.name}</h1>
        <LgImage src={this.props.source} />
  		 </div>
  	)
  }
}
