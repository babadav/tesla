import React, { Component } from 'react';
import { NavLink,BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
var Waypoint = require('react-waypoint')

const LgImage = styled.img`
  width: 100vw;
  

`
const Button = styled.div`
  > a {
    all: unset;
    color: black;
    padding: 10px 20px;
    border:1px solid black;
    background: white;
    border-radius:5px;
    transition:.3s all;
 }
 >a:hover {
  background: transparent;
  color:white;
 }
`

const LgCarImage = styled.div`
  width: 100vw;
  background-repeat: no-repeat;
  background-size: cover;
  padding-bottom: 55vh;
  background-position: center;


  >.button-text{
    position: relative;
    top: 375px;
    left: 100px;
    

    >h1{
    color: white;
    }
  }
  background-size: cover;
  height: 68vh;
  background-position: center;
  background-repeat: no-repeat;

  


`

export default class Car extends Component {

  constructor (props) {
	super(props);
  }
  render(){
  	console.log(this.props);
  	return(
  		<LgCarImage style={{backgroundImage:`url(${this.props.source})`}}>
        
        <div className='button-text'>
          <h1>{this.props.name}</h1>
          <Button><NavLink to={`${this.props.name.replace(' ','-')}/Overview`}>Discover</NavLink></Button>
        </div>
  		 </LgCarImage>

  	)
  }
}
