import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero';
import Home from './Home';
import NavBar from './NavBar';
import Overview from './Overview';



export default class App extends Component {

  // constructor (props) {
    // super(props);
    // this.state = {
    //   id: 0
    // }
    // this.setDetail = this.setDetail.bind(this);
  // }

  render() {
    return (
    	<div>
        <NavBar />

        <Home />
        <Overview />
      </div>
    );
  }
}