import React from 'react';
import { Component } from 'react';
import HamburgerMenu from 'react-hamburger-menu';
import photo from '../images/Frontandcenter.jpg';
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

      <div style={{ backgroundImage: `url(${photo})`}} className="container">
      <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.2.0/css/font-awesome.min.css" rel="stylesheet"/>
      <div className="nav-bar">
       <HamburgerMenu
       isOpen={this.state.open}
       menuClicked={this.handleClick.bind(this)}
       width={18}
       height={15}
       strokeWidth={2}
       rotate={0}
       color='black'
       borderRadius={0}
       animationDuration={0.3}
       />
       </div>
       <div className="social-icons">
        <a href="#" className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a> <a href="#" className="icoTwitter" title="Twitter"><i className="fa fa-twitter"></i></a>
      </div>

          <Row className="heading-name"><h1>ALLISON MANDAVILLE</h1></Row>

       </div>
    )
  }
}
