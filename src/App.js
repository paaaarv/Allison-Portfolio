import React, { Component } from 'react';
import './App.css';
import "animate.css/animate.min.css"
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Instagram from './components/instagram.js'
import Merch from './components/merch.js'
import Contact from './components/contact.js'
import East from './components/EAST.js'
class App extends Component {


  render() {
    return (
      <div>
          <Navbar/>
          <Projects/>
          <East/>
          <Contact/>
      </div>
    );
  }
}

export default App;
