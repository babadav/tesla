import React, { Component } from 'react';

export default class Spec extends Component {
	render() {
		return(
			<div>
				<h3>{this.props.name}</h3>
				<h5>{this.props.value ? this.props.value : 'unkown'}</h5>
			</div>
		)
	}
}