import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';


const ThreeDContainer = styled.div`
    width: 70%;
    margin: 0 auto;
    font-family: Proxima Nova, Sans Serif;
    padding-bottom: 5%;
    padding-top: 5%;

    > img{
      width:100%;
    }

     @media (max-width: 600px) {
    
      display: none;

    }
  `



export default class ThreeD extends Component {

  constructor (props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.rotateCar = this.rotateCar.bind(this);
    this.startRotate = this.startRotate.bind(this);
    this.endRotate = this.endRotate.bind(this);
    this.mouseMove = false;
    this.xLocation;
  }

  startRotate = (e) => {
    e.preventDefault();
    console.log(this.xLocation);
    this.mouseMove = true;
    this.xLocation = e.clientX;

  }
  rotateCar = (e) => {
    if(this.mouseMove) {
      console.log(this.state.counter);
      if(e.clientX > this.xLocation) {
        this.xLocation = e.clientX;
        this.setState({
          counter: this.state.counter < 36 ? this.state.counter+1 : this.state.counter = 1,
        })
      } else {
        if(this.state.counter>0) {
          this.xLocation = e.clientX;
          this.setState({
            counter: this.state.counter > 1 ? this.state.counter-1 : this.state.counter = 36,
          })
        }
      }
    } else {

    }
  }
  endRotate = (e) => {
    this.mouseMove = false;
  }

  render() {
    return (
    	<ThreeDContainer onMouseDown = { e => this.startRotate(e)} onMouseMove = { e => this.rotateCar(e)} onMouseUp= { e => this.endRotate(e)} >
        <img src={`${this.props.image}${this.state.counter}.jpg`} />
      </ThreeDContainer>
    )
  }
}