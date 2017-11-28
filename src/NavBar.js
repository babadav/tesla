import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';


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
          <NavLink to='../overview/ModelS' exact><li>Model S</li></NavLink>
          <NavLink to='../overview/ModelX' exact><li>Model X</li></NavLink>
          <NavLink to='../overview/Model3' exact><li>Model 3</li></NavLink>
          <NavLink to='../overview/Roadster' exact><li>Roadster</li></NavLink>
        </UlStyle>
        <LogoStyle className="logo">
          <NavLink to='../'><img src="/img/logo.svg" /></NavLink>
        </LogoStyle>
      </NavStyle>
      
    );
  }
}

// 