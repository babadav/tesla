import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Car from './Car';

const ThumbStyle = styled.img`
  width: 20%; 
  height: 50%;

`

const CarSelectionWrap = styled.div`
  display: flex;

`




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
        <CarSelectionWrap>
          <ThumbStyle onClick = {()=>{this.changeCar('Model 3')}} src={`${this.props.data['Model 3'].home.thumb}`} />
          <ThumbStyle onClick = {()=>{this.changeCar('Model S')}} src={`${this.props.data['Model S'].home.thumb}`} />
          <ThumbStyle onClick = {()=>{this.changeCar('Model X')}} src={`${this.props.data['Model X'].home.thumb}`} />
          <ThumbStyle onClick = {()=>{this.changeCar('Roadster')}} src={`${this.props.data['Roadster'].home.thumb}`} />
        </CarSelectionWrap>
        <Car name={this.state.car.name} source={this.state.car.home.image} />
        </div>
      
    );
  }
}