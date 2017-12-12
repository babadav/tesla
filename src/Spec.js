import React, { Component } from 'react';
import styled from 'styled-components';
const LightWrap = styled.div`
	background:transparent;
	padding-left: 5%;
	display:flex;
	h3 {
		width:50%
	}
	h5 {
		width: 50%;
	}
	align-items: center;

	
`
const DarkWrap = styled.div`
	background:RGBA(50,50,50,.2);
	display:flex;
    height: 50px;
    padding-left: 5%;
    @media (max-width: 600px) {
		
			width: 100%;

		}
	h3 {
		width:50%;

		@media (max-width: 600px) {
			width: 90%;
		}
	}
	h5 {
		width:50%;

		@media (max-width: 600px) {
		
			width: 90%;

		}
	}
	align-items: center;
`
export default class Spec extends Component {
	render() {
			console.log(this.props.id % 2);
			if(this.props.id % 2) {
				return(
					<DarkWrap>
						<h3>{this.props.name}</h3>
						<h5>{this.props.value ? this.props.value : 'unkown'}</h5>
					</DarkWrap>
				)
			} else {
				return(
					<LightWrap>
						<h3>{this.props.name}</h3>
						<h5>{this.props.value ? this.props.value : 'unkown'}</h5>
					</LightWrap>
				)
			}
	}
}