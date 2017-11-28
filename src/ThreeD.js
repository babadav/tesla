import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default class ThreeD extends Component {

  constructor (props) {
    super(props);
    this.state = {
      counter: 1
    }
    this.rotateCar = this.rotateCar.bind(this);
  }
  rotateCar(e) {
    e.preventDefault();
    console.log(e.screenX)
  }

  render() {
    return (
    	<div onClick = {(e)=> this.rotateCar(e)}>
        <img src={`../img/rotate/s/${this.state.counter}.jpg`} />
      </div>
      
    )
  }
}