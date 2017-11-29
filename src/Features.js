import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Feature from './Feature'
import styled from 'styled-components';

const ImgStyle = styled.img`
	width: 50%;
`

const FeatureWrap = styled.div`
	diplay: flex;
	flex-wrap: wrap;

`


export default class Features extends Component {

  constructor (props) {
	super(props);
  }

	

	render() {
		console.log(this.props.data)
		return (
			<FeatureWrap>
				{this.props.data.map(feature =>
					<Feature key={feature.id} {...feature} />)}
		  	</FeatureWrap>
		  
		);
	}
}