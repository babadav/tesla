import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Hero from './Hero';
import Home from './Home';
import NavBar from './NavBar';
import Overview from './Overview';
import {Info} from './Info';

const OverviewWrapper = (data) => (

  <Overview data={Info[data.match.params.model.replace('-',' ')]}/>
)

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
        <BrowserRouter className="Ap1p">
          <div className="App__body">
            <NavBar/>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/overview/:model" render={(props) => OverviewWrapper(props)} />
            </Switch>
         </div>
      </BrowserRouter>
    );
  }
}


// <Route path={`${this.props.match.url}view/:postId`} render={(props) => (
//     <Single {...this.props} {...props} />
// )} />