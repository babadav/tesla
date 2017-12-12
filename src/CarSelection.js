import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Car from './Car';
var Waypoint = require('react-waypoint');

const ThumbStyle = styled.img`
  width: 100%; 
`

const CarSelectionWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding-top: 5%;
`
const ThumbWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`





export default class CarSelection extends Component {

  constructor (props) {
  super(props);
  this.state = {
    carChoice: 0, 
    car: this.props.data[0],
    showCars: false
  }
  this.changeCar = this.changeCar.bind(this);
  this.enter = this.enter.bind(this);
  }
  changeCar(value) {
    this.setState({
      car: this.props.data[value],
    })
  }
  enter(){
    this.setState({
      showCars: true
    });
  }
  render() {
    return (
      <div>
        <CarSelectionWrap className={ this.state.showCars  ? 'active': ''}>
            {this.props.data.map(car =>
              <ThumbWrap key={car.id} onClick={()=>{this.changeCar(car.id)}}>
                <ThumbStyle src={car.thumb} />
                <p>{car.name}</p> 
              </ThumbWrap>
            )}
            <Waypoint onEnter= {this.enter} />
        </CarSelectionWrap>

          
        <Car name={this.state.car.name} source={this.state.car.image} />
        </div>
      
    );
  }
}