import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Car from './Car';

export default class CarSelection extends Component {

  constructor (props) {
  super(props);
  this.state = {carChoice:0, car:this.props.data['Model S']}
  this.changeCar = this.changeCar.bind(this);
  }
  changeCar(value) {
    this.setState({
      car: this.props.data[value],
    })
  }
  render() {
    console.log(this.props.data['Model S'].name)
    return (
      <div>
        <div className = 'buttons'>
          <img src={`${this.props.data['Model 3'].home.thumb}`} />
          <button onClick = {()=>{this.changeCar('Model S')}}>Click</button>
          <button onClick = {()=>{this.changeCar('Model X')}}>Click</button>
          <button onClick = {()=>{this.changeCar('Roadster')}}>Click</button>
          <button onClick = {()=>{this.changeCar('Model 3')}}>Click</button>
        </div>
        <Car name={this.state.car.name} source={this.state.car.home.image} />
        </div>
      
    );
  }
}