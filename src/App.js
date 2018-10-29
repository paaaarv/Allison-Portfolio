import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar.js'
import About from './components/about.js'
import Projects from './components/projects.js'
class App extends Component {
  render() {
    return (
      <div className="App">
      
          <Navbar/> <br/> <br/>
          <About />
          <Projects/>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >

            Learn React
          </a>
      </div>
    );
  }
}

export default App;
