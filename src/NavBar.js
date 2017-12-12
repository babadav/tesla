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
  > a {
    all: unset;color:
    transition: all 2s;
    color: RGBA(152, 157, 157, 1.00);

    &:hover {
      color: white;
    }
 }
  display: flex;
  justify-content: space-around;
  width: 30%;
  font-family: Proxima Nova, Sans Serif;
  font-family: 200;
  list-style-type: none;
  text-decoration: none;

  
  
  

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
    let car = null;
    this.props.car ? car=`../${this.props.car}` : car=''
    return (
      <NavStyle>
        <UlStyle>
          {this.props.items.map(link =>
            <NavLink key={link.id} to={car + link.to} exact>
              {link.name}
            </NavLink>
          )}
        </UlStyle>
        <LogoStyle className="logo">
          <NavLink to='../'><img src="/img/logo.svg" /></NavLink>
        </LogoStyle>
      </NavStyle>
      
    );
  }
}


//     <NavLink to='../Model-S' exact><li>Model S</li></NavLink>
//          <NavLink to='../Model-X' exact><li>Model X</li></NavLink>
//          <NavLink to='../Model-3' exact><li>Model 3</li></NavLink>
//          <NavLink to='../Roadster' exact><li>Roadster</li></NavLink>






