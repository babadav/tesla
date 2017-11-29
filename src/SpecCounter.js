import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

const Num = styled.h1 `
  color: red;

`
export default class SpecCounter extends Component {
	  constructor (props) {
	    super(props);
	    this.state = {
	    	speed:0,
	    	tor:0,
	    	zero60:0,
	    },
	  }

	render() {
		return(
			<div>
				<div>
					<h3>Top Speed</h3>
					<Num>{this.props.specs.speed}</Num>
				</div>
				<div>
					<h3>Torque</h3>
					<Num>{this.props.specs.tor}</Num>
				</div>
				<div>
					<h3>0 to 60</h3>
					<Num>{this.props.specs.zero60}</Num>
				</div>
			</div>
		)
	}
}