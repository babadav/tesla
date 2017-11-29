import React, { Component } from 'react';
import { NavLink,BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

const LgImage = styled.img`
  width: 100vw;
  

`
const Button = styled.div`
  > a {
    all: unset;
    color:black;
    padding: 10px 20px;
    border:1px solid black;
    background:transparent;
    border-radius:5px;
    transition:.3s all;
 }
 >a:hover {
  background:blue;
  color:white;
 }


`

export default class Car extends Component {

  constructor (props) {
	super(props);
  }
  render(){
  	console.log(this.props);
  	return(

  		<div> 
        <LgImage src={this.props.source} />
  			<h1>{this.props.name}</h1>
        <Button><NavLink to={`${this.props.name.replace(' ','-')}/Overview`}>Discover</NavLink></Button>
  		 </div>
  	)
  }
}
