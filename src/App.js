import './App.css';

import React, { Component } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
        <Navbar/>
        
        <Routes>
          <Route exact  path="/"  element={<News key='business' pageSize={35} category='general'/>}></Route>
          <Route exact  path="/business"  element={<News key='entertainment' pageSize={35} category='business'/>}></Route>
          <Route exact  path="/entertainment"  element={<News key='general' pageSize={35} category='entertainment'/>}></Route>
          <Route exact  path="/health"  element={<News key='health' pageSize={35} category='health'/>}></Route>
          <Route exact  path="/science"  element={<News key='science' pageSize={35} category='science'/>}></Route>
          <Route exact  path="/sports"  element={<News key='sports' pageSize={35} category='sports'/>}></Route>
          <Route exact  path="/technology"  element={<News key='technology' pageSize={35} category='technology'/>}></Route>
        </Routes>
        </Router>
      </div>
    )
  }
}

