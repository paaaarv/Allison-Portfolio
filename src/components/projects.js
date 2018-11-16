import React from 'react';
import { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, Container} from 'mdbreact';
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'
import photo5 from '../images/5.JPG'
import photo6 from '../images/6.jpg'
import photo1 from '../images/1.JPG'
import photo2 from '../images/2.JPG'
import ReactDOM from "react-dom";
export default class Projects extends React.Component {


  render(){
    return(

        <div className = "projects-div">
          <h3 className="lineHeading">PORTFOLIO</h3>
          <hr className="horizontal-line" align="center"/>
          <br/>
          <div className='carousel-div'>
          <Container>
        <Carousel
          activeItem={1}
          length={6}
          showControls={true}
          showIndicators={true}
          thumbnails
          className="z-depth-5">
          <CarouselInner>
            <CarouselItem itemId="1">
              <img className="d-block w-100" src={photo3} alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="2">
              <img className="d-block w-100" src={photo4} alt="Second slide" />
            </CarouselItem>
            <CarouselItem itemId="3">
              <img className="d-block w-100" src={photo5} alt="Third slide" />
            </CarouselItem>
            <CarouselItem itemId="4">
              <img className="d-block w-100" src={photo1} alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="5">
              <img className="d-block w-100" src={photo2} alt="First slide" />
            </CarouselItem>
            <CarouselItem itemId="6">
              <img className="d-block w-100" src={photo6} alt="First slide" />
            </CarouselItem>
          </CarouselInner>
        </Carousel>
      </Container>
      </div>
        </div>
    )
  }

}
