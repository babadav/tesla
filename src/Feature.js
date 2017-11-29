import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';

const ImgStyle = styled.img`
  width: 50%; 
  

`




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
					<div><ImgStyle src={this.props.image} /></div>
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