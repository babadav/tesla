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
    background: black;
    padding: 10px 20px;
    border:1px solid black;
    color: white;
    border-radius:5px;
    transition:.3s all;
    opacity: .6;
 }
   >a:hover {
    background: black;
    color:white;
    opacity: .8;
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
    left: 5%;
    top: 315%;
    width: 10%;
    

    >h1{
      color: white;
          text-shadow: 2px 2px 2px black;
      
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

  	return(
  		<LgCarImage style={{backgroundImage:`url(${this.props.source})`}}>


    
      <LgCarImage style={{backgroundImage:`url(${this.props.source})`}}>

        
        <div className='button-text'>
          <h1>{this.props.name}</h1>
          <Button><NavLink to={`${this.props.name.replace(' ','-')}/Overview`}>Discover</NavLink></Button>
        </div>

  		 </LgCarImage>

  	)

       </LgCarImage>
    )

  }
}