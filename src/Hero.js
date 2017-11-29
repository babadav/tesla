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
  color: #eee;
  position: absolute;
  left: 150px;
  top: 300px;
  font-family: Proxima Nova, Sans Serif;
  font-weight: 200;
  z-index: 1000;
`
const OutterWrap = styled.div `
  background-color: RGB(14 , 14, 14);
 
`

const Video = styled.video `
  width: 100vw;
  background-color: RGB(14 , 14, 14);
  opacity: .7;
 
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
    if(this.props.homeVideo) {
      return (
        <OutterWrap>
          <H1Style>Sports Series</H1Style>
          <Video autoPlay="true" loop muted>
              <source src='https://www.tesla.com/ns_videos/homepage-video-summer-2017.mp4?20170808' type="video/mp4" />
          </Video>

        </OutterWrap>
      );
    } else {
      return(
        <h1>Hello World</h1>
      )
    }
  }
}