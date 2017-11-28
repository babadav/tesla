import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';


const NavStyle = styled.nav`
  background-color: rgb(34, 34, 34);
  display: flex;
  justify-content: space-between;


  

`

const UlStyle = styled.ul`
  display: flex;
  justify-content: space-around;
  width: 30%;
  list-style-type: none;
  text-decoration: none;
  color: RGBA(152, 157, 157, 1.00);
  

`
const LogoStyle = styled.div`
    width: 6%;
    height: 100%;
    align-self: center;
    margin-right: 5%;


`

export default class NavBar extends Component {

  // constructor (props) {
    // super(props);
    // this.state = {
    //   id: 0
    // }
    // this.setDetail = this.setDetail.bind(this);
  // }

  render() {
    return (
    	<NavStyle>
        <UlStyle>
          <li><a>Model S</a></li>
          <li><a>Model X</a></li>
          <li><a>Model 3</a></li>
          <li><a>Roadster</a></li>
        </UlStyle>
        <LogoStyle className="logo">
          <img src="/img/logo.svg" />
        </LogoStyle>
      </NavStyle>
      
    );
  }
}