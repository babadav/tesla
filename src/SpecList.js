import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Spec from './Spec'


export default class SpecList extends Component {
	render(){
		console.log(this.props.data)
		return(
			<div>
				{this.props.data.map(cat =>
					<div>
						<h1>{cat.name}</h1>
						{cat.list.map(spec =>
							<Spec name={spec.name} value={spec.value} />
						)}
					</div>
				)}
		  	</div>
		)
	}
}





