import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Projects from './components/projects.js'
import Instagram from './components/instagram.js'
import Merch from './components/merch.js'
import Contact from './components/contact.js'
import 'jquery';
class App extends Component {


  render() {
    return (
      <div>

          <Navbar/>
          <About/>
          <Projects/>
          <Contact/>
      </div>
    );
  }
}

export default App;
