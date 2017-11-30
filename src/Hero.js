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

const UnderHeroText = styled.h2 `
    width: 70%;
    margin: 0 auto;
    margin-top: 5%;
    margin-bottom: 5%;
    font-size: 1rem;
    line-height: 2;
`
const HeroImage = styled.img `
    width: 100vw;
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
          <H1Style>Drive Green.</H1Style>
          <Video autoPlay="true" loop muted src={this.props.homeVideo} type="video/mp4">
          </Video>

        </OutterWrap>
      );
    } else if(this.props.image.video && this.props.summary) {
      return(
        <div>
          <OutterWrap className="hero">
            <H1Style>Drive Green.</H1Style>
            <Video2 autoPlay="true" loop muted src={this.props.image.video} type="video/mp4" >
            </Video2>
          </OutterWrap>
          <UnderHeroText>{this.props.summary}</UnderHeroText>
        </div>
      )
    } else if(this.props.summary) {
      return(

        <HeroImage src={this.props.image.hero} />
      ) 
    } else{
      return(
        <HeroImage src={this.props.image} />


        <OutterWrap>
          <H1Style>Drive Green.</H1Style>
          <img src={this.props.image.hero} />
        </OutterWrap>
      ) 
    } else{
      return(
        <OutterWrap>
          <H1Style>Drive Green.</H1Style>
          <img src={this.props.image} />
        </OutterWrap>
      ) 
    }
  }
}