import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route }   from 'react-router-dom'

class AppDefault extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React - this is an App component</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Link to="/page">Visit a page</Link>

      </div>
    );
  }
}

export default AppDefault;
