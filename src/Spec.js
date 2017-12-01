import React, { Component } from 'react';
import styled from 'styled-components';
const LightWrap = styled.div`
	background:transparent;
	display:flex;
	h3 {
		width:50%
	}
	h5 {
		font-size:1.1em;
		width:50%;
	}
`
const DarkWrap = styled.div`
	background:RGBA(50,50,50,.2);
	display:flex;
	h3 {
		width:50%;
	}
	h5 {
		font-size:1.1em;
		width:50%;
	}
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