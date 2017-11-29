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
const HomeWrapper = (data) => (
  <div>
    <NavBar items={Info['Home'].nav} />
    <Home 
      features={Info['Home'].modules} 
      video={Info["Home"].video} 
      select={Info["Home"].select}
    />
  </div>
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
            <Switch>
              <Route path="/" exact component={(props) => HomeWrapper(props)} />
              <Route path="/:model" render={(props) => OverviewWrapper(props)} />
              <Route path="/:model/specs" render={(props) => OverviewWrapper(props)} />
            </Switch>
         </div>
      </BrowserRouter>
    );
  }
}


// <Route path={`${this.props.match.url}view/:postId`} render={(props) => (
//     <Single {...this.props} {...props} />
// )} />