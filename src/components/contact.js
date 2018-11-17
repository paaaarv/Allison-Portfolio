import React from 'react';
import { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap';


export default class Contact extends React.Component{


  render(){

    return(

      <div className="justify-content-center contact-div">

      <Row>
      <Col className=" flex-fill">
        <h4> CONTACT </h4> <br/>
        <p className="contact-about">allison.mandaville@gmail.com</p>
      </Col>
      <Col className="flex-fill" >
        <h4> CONNECT </h4><br/>
        <a href="http://www.instagram.com/alpantsmandy" className='contact-about'> <i className="fab fa-instagram"></i> instagram </a>

      </Col>
      </Row>

      </div>


    )

  }


}
