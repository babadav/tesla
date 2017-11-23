import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";


import Sidebar from "./Sidebar";
import Login from './Login';
import Register from './Register';
import CategoryPage from "./CategoryPage";
import GalleryPage from './GalleryPage';
import ImageDetail from './ImageDetail';

const DetailWrapper = (id) => (
  <ImageDetail id={id} />
)
const GalleryPageWrapper = (detail) => (
  <GalleryPage setDetail={detail} />
)
export default class App extends Component {

  constructor (props) {
    super(props);
    this.state = {
      id: 0
    }
    this.setDetail = this.setDetail.bind(this);
  }
  setDetail(imageID) {
    console.log("setDetail", imageID);
    this.setState({
      id:imageID
    })
  }
  // componentDidMount () {
   
  // } 

  render() {
    return (

      <BrowserRouter className="App">
        <div className="App__body">
          <Sidebar/>
          <Switch>
            <Route path="/~michele.james/build/" exact component={() => GalleryPageWrapper(this.setDetail)} />
            <Route path="/~michele.james/build/LoginPage" component={ Login } />
            <Route path="/~michele.james/build/RegisterPage" component={ Register } />
            <Route path="/~michele.james/build/CategoryPage" component={ CategoryPage } />
            <Route path="/~michele.james/build/Detail" component={() => DetailWrapper(this.state.id)} />
          </Switch>
         </div>
      </BrowserRouter>
    );
  }
}
           