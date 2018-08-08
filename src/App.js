import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Route }   from 'react-router-dom';
import AppDefault from './AppDefault.js';
import AppPage    from './AppPage.js';

class App extends Component {
  render() {
    return (
      <div>
      <Route exact path="/"     component={AppDefault}/>
      <Route path="/page" component={AppPage}/>
      </div>
    );
  }
}

export default App;
