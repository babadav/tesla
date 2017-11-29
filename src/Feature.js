import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

const ImgStyle = styled.img`
	width: 100%;
`
const ImgContainer = styled.div`
	width: 50%;


`


const FeatureWrap = styled.div`
	display: flex;

	> .text-wrap{
		width: 50%;
		display: flex;
		flex-direction: column;
	}

`





export default class Feature extends Component {

  constructor (props) {
	super(props);
  }

	

	render() {
		if(this.props.id % 2) {
			return (
				<FeatureWrap>
					<div className='text-wrap'>
						<h1>{this.props.headline}</h1>
						<h2>{this.props.text}</h2>
					</div>
					
					<ImgContainer><ImgStyle src={this.props.image} /></ImgContainer>
			  	</FeatureWrap>
			  
			);
		} else {
			return (
			<FeatureWrap>
				<div><ImgStyle src={this.props.image} /></div>
				<h1>{this.props.headline}</h1>
				<h2>{this.props.text}</h2>
		  	</FeatureWrap>
		  
		);
		}
		
	}
}