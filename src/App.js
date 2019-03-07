import React, { Component } from 'react';

import './App.css';
import Header from './Header';
import Intro from './Intro';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body/>
        <Intro/>
      </div>
    );
  }
}


class Body extends Component {
  render() {
    return (
    <div>
      <div className="App-Body"/>
        <h3>UserName: <input type="text"/></h3>
        <p/>
        <h3>Password: <input type="text"/></h3>
    </div>
    );
  }
}


export default App;
