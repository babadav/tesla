import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import styled from 'styled-components';
import Hero from './Hero';
import Home from './Home';
import NavBar from './NavBar';
import {Info} from './Info';
import CarWrappers from './CarWrappers';

const AppStyle = styled.div`

    font-family: Proxima Nova, Sans Serif;
  `



const Wrapper = (data,tag) => (
  <div>
    <NavBar items={Info['Nav'].cars} car={data.match.params.model}/>
    <CarWrappers page={data.match.params.page} data={Info.Cars.find((car)=>{return car.name == data.match.params.model.replace('-',' ')})}/>
  </div>
)
const HomeWrapper = (data) => (
  <div>
    <NavBar items={Info['Nav'].home} />
    <Home 
      features={Info['Home'].modules} 
      video={Info["Home"].video} 
      select={Info["Home"].select}
    />
  </div>
)

export default class App extends Component {

  // constructor (props) {
  //   super(props);
  //   this.findCar = this.setDetail.bind(this);
  // }

  render() {
    return (
        <BrowserRouter className="Ap1p">
          <AppStyle className="App__body">
            <Switch>
              <Route path="/" exact component={(props) => HomeWrapper(props)} />
              <Route path="/:model/:page" render={(props) => Wrapper(props)} />
              <Route path="/:model/:page" render={(props) => Wrapper(props)} />
            </Switch>
         </AppStyle>
      </BrowserRouter>
    );
  }
}
//data.match.params.model

// <Route path={`${this.props.match.url}view/:postId`} render={(props) => (
//     <Single {...this.props} {...props} />
// )} />