import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Instagram from './components/instagram.js'
import 'jquery';
class App extends Component {

  
  render() {
    return (
      <div className="main App">

          <Navbar/>
          <About/>
          <Projects/>
          <Instagram/>

      </div>
    );
  }
}

export default App;
