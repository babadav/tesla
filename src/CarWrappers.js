import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Overview from './Overview';
import Specs from './Specs'

export default class CarWrappers extends Component {


	constructor (props) {
		super(props);
		this.state = {
			[this.props.page]: true,
		}
	}
	render() {
		if(this.props.page == "Overview") {
			return <Overview data={this.props.data} />
		}else if(this.props.page == "Specs") {
			return <Specs data={this.props.data.specs} />
		}
		
	}
}