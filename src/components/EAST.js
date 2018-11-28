import React from 'react';
import { Component } from 'react'
import { Container, Row, Col } from 'mdbreact';
import Lightbox from 'react-image-lightbox';
import {MDBBtn} from 'mdbreact'
import pic10 from '../images/east/20181110-IMG_6141-2.JPG'
import pic4 from '../images/east/20181110-IMG_6153-2.JPG'
import pic5 from '../images/east/20181110-IMG_6161-2.JPG'
import pic16 from '../images/east/20181110-IMG_6169-2.JPG'
import pic2 from '../images/east/20181110-IMG_6181-2.JPG'
import pic1 from '../images/east/20181110-IMG_6182-2.JPG'
import pic13 from '../images/east/20181110-IMG_6189-2.JPG'
import pic14 from '../images/east/20181110-IMG_6193-2.JPG'
import pic6 from '../images/east/20181110-IMG_6198-2.JPG'
import pic11 from '../images/east/20181110-IMG_6213-2.JPG'
import pic3 from '../images/east/20181110-IMG_6218-2.JPG'
import pic8 from '../images/east/20181110-IMG_6228-2.JPG'
import pic9 from '../images/east/20181110-IMG_6245-2.JPG'
import pic15 from '../images/east/20181110-IMG_6257-2.JPG'
import pic7 from '../images/east/20181110-IMG_6264-2.JPG'
import pic17 from '../images/east/20181110-IMG_6276-2.JPG'
import pic18 from '../images/east/20181110-IMG_6302-2.JPG'


const images = [

  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(117).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(98).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(131).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(123).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(118).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(128).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(132).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(115).jpg',
  'https://mdbootstrap.com/img/Photos/Horizontal/Nature/12-col/img%20(133).jpg'
];

const smallImages = [
  pic1,pic2,pic3,pic4,pic5,pic6,pic7,pic8, pic9, pic10,pic11,pic13,pic14,pic15,pic16,pic17,pic18]
export default class East extends React.Component{
  constructor(props) {
    super(props);

    this.state = {
      photoIndex: 0,
      isOpen: false,
    };
  }
  handleClick = () =>{

  }

    render() {
      const { photoIndex, isOpen } = this.state;
      return(
          <div className="projects-div">
          <h3 className="lineHeading">EAST AUSTIN</h3>
          <h3 className="lineHeading">STUDIO TOUR</h3>
          <hr className="horizontal-line" align="center"/>
          <br/>
          <Container className="mt-5">
        <div className="mdb-lightbox no-margin">
          <Row className="picturerow">
            <Col xs='12' md="12">

            </Col>
            <Col xs='6' md="4">
              <figure>
                <img src={smallImages[0]} alt="Gallery" className="img-fluid" />
              </figure>
            </Col>
            <Col xs='6' md="4">
              <figure>
                <img src={smallImages[1]} alt="Gallery" className="img-fluid"  />
              </figure>
            </Col>
            <Col xs='12' md="4">
              <figure>
                <img src={smallImages[2]} alt="Gallery" className="img-fluid"  />
              </figure>
            </Col>
            <Col xs='6' md="4">
              <figure>
                <img src={smallImages[3]} alt="Gallery" className="img-fluid"/>
              </figure>
            </Col>
            <Col xs='6' md="4">
              <figure>
                <img src={smallImages[4]} alt="Gallery" className="img-fluid" />
              </figure>
            </Col>
            <Col xs='12' md="4">
              <figure>
                <img src={smallImages[5]} alt="Gallery" className="img-fluid"/>
              </figure>
            </Col>
            <Col xs='6' md="4">
              <figure>
                <img src={smallImages[6]} alt="Gallery" className="img-fluid"  />
              </figure>
            </Col>
            <Col xs='6' md="4">
              <figure>
                <img src={smallImages[7]} alt="Gallery" className="img-fluid" />
              </figure>
            </Col>
          <Col xs='12' md="4">
              <figure>
                <img src={smallImages[8]} alt="Gallery" className="img-fluid"  />
              </figure>
            </Col>
          </Row>
          <Row>
          <MDBBtn style={{margin:'auto'}} onClick={this.handleClick} outline color="pink" size='lg'> See More </MDBBtn>
          </Row>
        </div>

          </Container>
          </div>
)}
}
