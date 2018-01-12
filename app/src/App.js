import React, { Component } from 'react';
import banner from './image.png';
import './App.css';
import Menu from './menu';
import Content from './content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img src={banner} className="banner" alt="banner" />
        <Menu />
        <Content />
        <p className="emoji">
          React school <code>(•_•) ( •_•)>⌐■-■ (⌐■_■)</code> is cool.
        </p>
      </div>
    );
  }
}

export default App;
