import './App.css';

import React, { Component } from 'react'
import { Navbar } from './components/Navbar';
import News from './components/News';
import NewsItem from './components/NewsItem';
import {
  Route,
  Link,
  HashRouter,
  Switch
} from "react-router-dom";

export default class App extends Component {
  pageSize = 5
  render() {
    return (
      <div>
        <HashRouter basename="/">
          <Navbar />
             <Route exact path='/'> <News exact path='/' pageSize={this.pageSize} country='in' category='general' apiKey='f726607cf9ce4c5c83444169551334a2' /></Route>
             <Route exact path='/business'> <News exact path='/' pageSize={this.pageSize} country='in' category='business' apiKey='f726607cf9ce4c5c83444169551334a2' /></Route>
             <Route exact path='/technology'> <News exact path='/' pageSize={this.pageSize} country='in' category='technology' apiKey='f726607cf9ce4c5c83444169551334a2' /></Route>
             <Route exact path='/science'> <News exact path='/' pageSize={this.pageSize} country='in' category='science' apiKey='f726607cf9ce4c5c83444169551334a2' /></Route>
             <Route exact path='/health'> <News exact path='/' pageSize={this.pageSize} country='in' category='health' apiKey='f726607cf9ce4c5c83444169551334a2' /></Route>
             <Route exact path='/sports'> <News exact path='/' pageSize={this.pageSize} country='in' category='sports' apiKey='f726607cf9ce4c5c83444169551334a2' /></Route>
             <Route exact path='/entertainment'> <News exact path='/' pageSize={this.pageSize} country='in' category='entertainment' apiKey='f726607cf9ce4c5c83444169551334a2' /></Route>
        </HashRouter>
      </div>
    )
  }
}

