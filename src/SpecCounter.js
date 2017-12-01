import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import AnimatedNumber from 'react-animated-number';

const NumWrap = styled.div `
  > .number {
  	color: red;
  }
  display:flex;
  flex-direction: column;
  width: 30%;
  background:white;
  justify-content:center;
  align-items:center;
`
const Wrap = styled.div`
	display:flex;
	width:80%;
	margin: 0 auto;
	justify-content:space-between;
	margin-top: -100px;
	padding-bottom: 100px;
	flex-wrap:wrap;


`
const SecondWrap = styled.div`
	display:flex;
	color:red;
	align-items: flex-end;
	> h4 {
		color:#222;
		margin-left:10px;
	}
	
`
export default class SpecCounter extends Component {
	constructor (props) {
		super(props);
		this.speed = 0;
		this.tor = 0;
		this.zero60 = 0;
		this.numberStyle = 
		{
            transition: '0.8s ease-out',
            fontSize: 48,
            transitionProperty:
                'background-color, color, opacity'
        }
	}
	componentdidMount() {
		while(this.speed < this.props.specs.speed) {
			setTimeout(()=>{this.speed++},100);
		}
	}


	render() {
		return(
			<Wrap>
				<NumWrap>
					<h3>Top Speed</h3>
					<SecondWrap>
						<AnimatedNumber className="number" component="text" value={this.props.specs.speed}
				            frameStyle={perc => (
				                perc === 100 ? {} : {}
				            )}
				            duration={1100}
				            stepPrecision={0}
				            style={this.numberStyle}
				        />
				        <h4>hp ({Math.round(this.props.specs.speed * 1.60934)} kW)</h4>
				        </SecondWrap>
				</NumWrap>
				<NumWrap>
					<h3>Torque</h3>
					<SecondWrap>
						<AnimatedNumber className="number" component="text" value={this.props.specs.tor}
				            frameStyle={perc => (
				                perc === 100 ? {} : {}
				            )}
				            duration={1000}
				            stepPrecision={0}
				            style={this.numberStyle}
				        />
				        <h4>lb-ft</h4>
				    </SecondWrap>
				</NumWrap>
				<NumWrap>
					<h3>0 to 60</h3>
					<SecondWrap>
						<AnimatedNumber className="number" component="text" value={this.props.specs.zero60}
				            frameStyle={perc => (
				                perc === 100 ? {} : {}
				            )}
				            duration={1000}
				            stepPrecision={2}
				            style={this.numberStyle}
				        />
				        <h4>Seconds</h4>
				    </SecondWrap>
				</NumWrap>
			</Wrap>
		)
	}
}

//this.props.specs.speed
//this.props.specs.tor
//this.props.specs.zero60