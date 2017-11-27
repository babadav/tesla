import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default class Feature extends Component {

  constructor (props) {
	super(props);
  }

	

	render() {
		if(this.props.id % 2) {
			return (
				<div>
					<h1>{this.props.id}</h1>
					<div>{this.props.image}</div>
			  	</div>
			  
			);
		} else {
			return (
			<div>
				<div>{this.props.image}</div>
				<h1>{this.props.id}</h1>
		  	</div>
		  
		);
		}
		
	}
}