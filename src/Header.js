import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
    render() {
      return (
      <div>
        <div className="App-Header">
          <h1>React
            <img src={logo} className="App-logo" alt="logo" />
          </h1>
        </div>
      </div> 
      )
    }
  }

  export default Header;