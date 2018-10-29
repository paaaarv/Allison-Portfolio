import React from 'react';
import { Component } from 'react';
import { Grid, Row, Col, Image } from 'react-bootstrap';
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'
export default class Projects extends React.Component {


  render(){
    return(
      <div>
        <Grid>
          <Row>
            <Col xs={6} md={4}>
              <Image style={{width: 300, height: 'auto'}} src= {photo3} />
            </Col>
            <Col xs={6} md={4}>
              <Image style={{width:300, height: 'auto'}} src = {photo4}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }

}
