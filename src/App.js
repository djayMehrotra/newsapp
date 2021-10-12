import './App.css';

import React, { useState } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  Route,
  Link,
  HashRouter,
  Switch
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 5
  const apiKey = process.env.REACT_APP_NEWS_API3
  /* state = {
    progress: 0
  } */

  const [progress, setProgress] = useState(0);

  /* const setProgress = (progress) => {
    setState({ progress: progress });
  } */

  return (
    <div>
      <HashRouter basename="/">
        <LoadingBar
          height={3}
          color='#f11946'
          progress={progress}
        />
        <Navbar />
        <Route exact path='/'> <News setProgress={setProgress} exact path='/' pageSize={pageSize} country='in' category='general' apiKey={apiKey} /></Route>
        <Route exact path='/business'> <News setProgress={setProgress} exact path='/' pageSize={pageSize} country='in' category='business' apiKey={apiKey} /></Route>
        <Route exact path='/technology'> <News setProgress={setProgress} exact path='/' pageSize={pageSize} country='in' category='technology' apiKey={apiKey} /></Route>
        <Route exact path='/science'> <News setProgress={setProgress} exact path='/' pageSize={pageSize} country='in' category='science' apiKey={apiKey} /></Route>
        <Route exact path='/health'> <News setProgress={setProgress} exact path='/' pageSize={pageSize} country='in' category='health' apiKey={apiKey} /></Route>
        <Route exact path='/sports'> <News setProgress={setProgress} exact path='/' pageSize={pageSize} country='in' category='sports' apiKey={apiKey} /></Route>
        <Route exact path='/entertainment'> <News setProgress={setProgress} exact path='/' pageSize={pageSize} country='in' category='entertainment' apiKey={apiKey} /></Route>
      </HashRouter>
    </div>
  )

}

export default App

