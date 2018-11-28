import React from 'react';
import { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import photo from '../images/IMG_3759.JPG';
import { Row, Col, Grid, Image } from 'react-bootstrap';




export default class Navbar extends React.Component{
    constructor(props) {
      super(props)
      this.state = {
      open: false
    }
    }
    handleClick() {
    this.setState({
        open: !this.state.open
    });
}
  render(){
    return(

      <div style={{ backgroundImage: `url(${photo})`}} className="w-auto z-depth-0 background-image-div ">

      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.4.2/css/all.css" integrity="sha384-/rXc/GQVaYpyDdyxK+ecHPVYJSN9bmVFBvjA/9eOB+pb3F2w2N6fc5qB9Ew5yIns" crossorigin="anonymous"/>


      <div className="nav-bar">
       </div>
       <div className="social-icons">
         <a href="https://www.instagram.com/alpantsmandy/" ><i className="fab fa-instagram"></i></a>
      </div>

          <div className= "h1-responsive d-flex z-depth-10" ><h1 className="heading-name">ALLISON MANDAVILLE</h1></div>

       </div>
    )
  }
}
