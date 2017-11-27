import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feature from './Feature'


export default class Features extends Component {

  constructor (props) {
	super(props);
	this.state = {data: [
	  {
		id: 0,
		name: 'falsdkf',
		image:'this is the image',
	  },
	  {
		id: 1,
		name: 'falsdkf',
		image:'this is the image',
	  },
	  {
		id: 2,
		name: 'falsdkf',
		image:'this is the image',
	  },
	  {
		id: 3,
		name: 'falsdkf',
		image:'this is the image',
	  },


	]}
  }

	

	render() {
		return (
			<div>
				{this.state.data.map(feature =>
					<Feature key={feature.id} {...feature} />)}
		  	</div>
		  
		);
	}
}