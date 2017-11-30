import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

const ImgStyle = styled.img`
	width: 100%;
	height:100%
`
const ImgContainer = styled.div`
	width: 50%;
	height:300px;
`


const FeatureWrap = styled.div`
	display: flex;
	align-items: center;
	background-color: RGBA(240, 240, 240, 1.00);

	> .text-wrap{
		width: 50%;
		display: flex;
		flex-direction: column;
		font-family: Proxima Nova, Sans Serif;
		font-weight: 100;

	}
	h1{
		width: 80%;
		margin: 0 auto;
		margin-bottom: 2.5%;
		color: RGB(120, 120, 120);
	}

	h2{
		width: 80%;
		margin: 0 auto;
		color: RGB(120, 120, 120);
	    font-size: 1rem;
	    line-height: 1.8;
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
				<ImgContainer><ImgStyle src={this.props.image} /></ImgContainer>
				<div className='text-wrap'>
					<h1>{this.props.headline}</h1>
					<h2>{this.props.text}</h2>
				</div>
		  	</FeatureWrap>
		  
		);
		}
		
	}
}