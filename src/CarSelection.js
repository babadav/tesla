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
  this.state = {carChoice:0, car:this.props.data[0]}
  this.changeCar = this.changeCar.bind(this);
  }
  changeCar(value) {
    this.setState({
      car: this.props.data[value],
    })
  }
  render() {
    return (
      <div>
        <CarSelectionWrap>
            {this.props.data.map(car =>
              <ThumbWrap key={car.id} onClick={()=>{this.changeCar(car.id)}}>
                <ThumbStyle src={car.thumb} />
                <p>{car.name}</p> 
              </ThumbWrap>
            )}
        </CarSelectionWrap>
          
        <Car name={this.state.car.name} source={this.state.car.image} />
        </div>
      
    );
  }
}