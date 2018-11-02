import React from 'react';
import { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, Container} from 'mdbreact';
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'
import photo5 from '../images/5.JPG'
import photo6 from '../images/6.jpg'
import ReactDOM from "react-dom";
export default class Projects extends React.Component {


  render(){
    return(

        <div className = "projects-div ">
          <h3 className="lineHeading">PORTFOLIO</h3>
          <hr className="horizontal-line" align="center"/>
          <br/>
          <div className='carousel-div'>
          <Container>
        <Carousel
          activeItem={1}
          length={3}
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
          </CarouselInner>
        </Carousel>
      </Container>
      </div>
        </div>
    )
  }

}
