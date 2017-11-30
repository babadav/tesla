import React, { Component } from 'react';
import styled from 'styled-components';
const LightWrap = styled.div`
	background:transparent;
`
const DarkWrap = styled.div`
	background:RGBA(0,0,0,.5);
`
export default class Spec extends Component {
	render() {
			console.log(this.props.id % 2);
			if(this.props.id % 2) {
				return(
					<LightWrap>
						<h3>{this.props.name}</h3>
						<h5>{this.props.value ? this.props.value : 'unkown'}</h5>
					</LightWrap>
				)
			} else {
				return(
					<DarkWrap>
						<h3>{this.props.name}</h3>
						<h5>{this.props.value ? this.props.value : 'unkown'}</h5>
					</DarkWrap>
				)
			}
	}
}