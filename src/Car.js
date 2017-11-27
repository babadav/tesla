import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


export default class Car extends Component {

  constructor (props) {
	super(props);
  }
  render(){
  	console.log(this.props);
  	return(

  		<div> 
  			<h1>{this.props.name}</h1>

  		 </div>
  	)
  }
}
