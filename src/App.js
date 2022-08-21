import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  pagesize=6;
// apiKey = 'b51ce35cc45749c38e6b0a768f695486'   for hiiding you api key in env file;
apiKey = process.env.REACT_APP_NEWS_API;

  state={
    progress: 0
  }
  setProgress = (progress) =>{
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar
        color='#f11946'
        progress={this.state.progress}
      />
        
        <Routes>
          <Route exact  path="/"  element={<News apiKey = {this.apiKey} setProgress={this.setProgress} key='business' pageSize={this.pagesize} category='general'/>}></Route>
          <Route exact  path="/business"  element={<News apiKey = {this.apiKey} setProgress={this.setProgress} key='entertainment' pageSize={this.pagesize} category='business'/>}></Route>
          <Route exact  path="/entertainment"  element={<News apiKey = {this.apiKey} setProgress={this.setProgress} key='general' pageSize={this.pagesize} category='entertainment'/>}></Route>
          <Route exact  path="/health"  element={<News apiKey = {this.apiKey} setProgress={this.setProgress} key='health' pageSize={this.pagesize} category='health'/>}></Route>
          <Route exact  path="/science"  element={<News apiKey = {this.apiKey} setProgress={this.setProgress} key='science' pageSize={this.pagesize} category='science'/>}></Route>
          <Route exact  path="/sports"  element={<News apiKey = {this.apiKey} setProgress={this.setProgress} key='sports' pageSize={this.pagesize} category='sports'/>}></Route>
          <Route exact  path="/technology"  element={<News apiKey = {this.apiKey} setProgress={this.setProgress} key='technology' pageSize={this.pagesize} category='technology'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

