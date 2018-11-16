import React from 'react';
import { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap';


export default class Contact extends React.Component{


  render(){

    return(

      <div className="contact-div">
      <Grid>
      <Row>
      <Col xs='3' sm='4' md='7' >
        <h4> CONTACT </h4>
      </Col>
      <Col >
        <h4> CONNECT </h4>
      </Col>
      </Row>
      <Row>
      <Col xs='3' sm='4' md='7' >
        <p className="contact-about"> allison.mandaville@gmail.com</p>
      </Col>
      <Col>
        <a href="http://www.instagram.com/alpantsmandy" className='contact-about'> <i className="fab fa-instagram"></i> instagram </a>
      </Col>
      </Row>
      </Grid>
      </div>


    )

  }


}
