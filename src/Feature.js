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
					<h1>{this.props.headline}</h1>
					<h2>{this.props.text}</h2>
					<div><img src={this.props.image} /></div>
			  	</div>
			  
			);
		} else {
			return (
			<div>
				<div><img src={this.props.image} /></div>
				<h1>{this.props.headline}</h1>
				<h2>{this.props.text}</h2>
		  	</div>
		  
		);
		}
		
	}
}