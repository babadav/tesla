import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero.js';
import SpecCounter from './SpecCounter';
import SpecList from './SpecList'

export default class Specs extends Component {
	render() {
		return(
			<div>
				<Hero image={this.props.data.specsHero}/>
				<SpecCounter specs={this.props.data.counter} />
				<SpecList data={this.props.data.specList}/>
			</div>
		)

	}
}