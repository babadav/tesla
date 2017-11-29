import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feature from './Feature'


export default class Features extends Component {

  constructor (props) {
	super(props);
  }

	

	render() {
		console.log(this.props.data)
		return (
			<div>
				{this.props.data.map(feature =>
					<Feature key={feature.id} {...feature} />)}
		  	</div>
		  
		);
	}
}