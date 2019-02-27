import React, { Component } from 'react';
import logo from './logo.svg';
import ResponsiveDrawer from './ResponsiveDrawer';
import PersistentDrawer from './PersistentDrawer';
import Combination from './Combination';
import './App.css';
import ResponsiveDrawer2 from './ResponsiveDrawer2';

class App extends Component {
  render() {
    return (
      <div>
        <PersistentDrawer/>
      </div>
    );
  }
}

export default App;
