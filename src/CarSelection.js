import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Car from './Car';

const ThumbStyle = styled.img`
  width: 100%; 


`

const CarSelectionWrap = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;

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
          <ThumbWrap>
            <ThumbStyle onClick = {()=>{this.changeCar('Model S')}} src={`${this.props.data['Model S'].home.thumb}`} />
            <p>Model S</p>
          </ThumbWrap>
          <ThumbWrap>
            <ThumbStyle onClick = {()=>{this.changeCar('Model 3')}} src={`${this.props.data['Model 3'].home.thumb}`} />
            <p>Model 3</p>
          </ThumbWrap>
          <ThumbWrap>
            <ThumbStyle onClick = {()=>{this.changeCar('Model X')}} src={`${this.props.data['Model X'].home.thumb}`} />
              <p>Model X</p>
          </ThumbWrap>
          <ThumbWrap>
            <ThumbStyle onClick = {()=>{this.changeCar('Roadster')}} src={`${this.props.data['Roadster'].home.thumb}`} />
              <p>Roadster</p>
          </ThumbWrap>

          

          
        </CarSelectionWrap>
        <Car name={this.state.car.name} source={this.state.car.home.image} />
        </div>
      
    );
  }
}