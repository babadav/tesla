import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import AnimatedNumber from 'react-animated-number';

const NumWrap = styled.div `
  > .number {
  	color: red;
  }

`
export default class SpecCounter extends Component {
	constructor (props) {
		super(props);
		this.speed = 0;
		this.tor = 0;
		this.zero60 = 0;
	}
	componentdidMount() {
		while(this.speed < this.props.specs.speed) {
			setTimeout(()=>{this.speed++},100);
		}
	}


	render() {
		return(
			<div>
				<NumWrap>
					<h3>Top Speed</h3>
					<AnimatedNumber className="number" component="text" value={this.props.specs.speed}
			            frameStyle={perc => (
			                perc === 100 ? {} : {}
			            )}
			            duration={1100}
			            stepPrecision={0}
			        />
				</NumWrap>
				<NumWrap>
					<h3>Torque</h3>
					<AnimatedNumber className="number" component="text" value={this.props.specs.tor}
			            frameStyle={perc => (
			                perc === 100 ? {} : {}
			            )}
			            duration={1000}
			            stepPrecision={0}
			        />
				</NumWrap>
				<NumWrap>
					<h3>0 to 60</h3>
					<AnimatedNumber className="number" component="text" value={this.props.specs.zero60}
			            frameStyle={perc => (
			                perc === 100 ? {} : {}
			            )}
			            duration={1000}
			            stepPrecision={2}
			        />
				</NumWrap>
			</div>
		)
	}
}

//this.props.specs.speed
//this.props.specs.tor
//this.props.specs.zero60