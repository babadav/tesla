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
  opacity: .8;
 
`
const Video2 = styled.video `
  width: 100vw;
  opacity: .9;
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
        <OutterWrap className="hero">
          <H1Style>Sports Series</H1Style>
          <Video autoPlay="true" loop muted src={this.props.homeVideo} type="video/mp4">
          </Video>

        </OutterWrap>
      );
    } else if(this.props.image.video && this.props.summary) {
      return(
        <div>
          <OutterWrap className="hero">
            <Video2 autoPlay="true" loop muted src={this.props.image.video} type="video/mp4" >
            </Video2>
          </OutterWrap>
          <h2>{this.props.summary}</h2>
        </div>
      )
    } else if(this.props.summary) {
      return(
        <div className="hero">
          <img src={this.props.image.hero} />
        </div>
      ) 
    } else{
      return(
        <div className="hero">
          <img src={this.props.image} />
        </div>
      ) 
    }
  }
}