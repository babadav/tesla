import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Car from './Car';

export default class CarSelection extends Component {

  constructor (props) {
  super(props);
  this.state = {data: [
    {
    id: 0,
    name: '570S Coupe',
    image:'this is the image',
    },
    {
    id: 1,
    name: '570S Spider',
    image:'this is the image',
    },
    {
    id: 2,
    name: '570gt',
    image:'this is the image',
    },
    {
    id: 3,
    name: '570C',
    image:'this is the image',
    },


  ],carChoice:0 }
    this.changeCar = this.changeCar.bind(this);
  }
  changeCar(value) {
    this.setState({
      carChoice: value,
    })
  }
  render() {

    return (
      <div>
        <div className = 'buttons'>
          <button onClick = {()=>{this.changeCar(0)}}>Click</button>
          <button onClick = {()=>{this.changeCar(1)}}>Click</button>
          <button onClick = {()=>{this.changeCar(2)}}>Click</button>
          <button onClick = {()=>{this.changeCar(3)}}>Click</button>
        </div>
        <Car {...this.state.data[this.state.carChoice]} />
        </div>
      
    );
  }
}