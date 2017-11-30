import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero.js';
import SpecCounter from './SpecCounter';
import SpecList from './SpecList';
import styled from 'styled-components';

const SpecsStyle = styled.div`
	width:100%;
	> Hero {
		
	}


`

export default class Specs extends Component {
	render() {
		return(
			<SpecsStyle>
				<Hero image={this.props.data.specsHero}/>
				<SpecCounter specs={this.props.data.counter} />
				<SpecList data={this.props.data.specList}/>
			</SpecsStyle>
		)

	}
}