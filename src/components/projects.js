import React from 'react';
import { Component } from 'react';
import { Carousel, CarouselInner, CarouselItem, Container, Row, Col, Card, CardImage, CardBody, CardTitle, CardText, Button } from 'mdbreact';
import photo3 from '../images/3.jpg'
import photo4 from '../images/4.jpg'
import photo5 from '../images/5.JPG'
import photo6 from '../images/6.jpg'
import ReactDOM from "react-dom";
export default class Projects extends React.Component {


  render(){
    return(

        <div className="mx-auto lineHeading">
          <h3> <bold className="heading-decoration"> - </bold>PORTFOLIO<bold className="heading-decoration"> - </bold> </h3>
          <br/>
          <Container>





          <Carousel
              activeItem={2}
              length={3}
              slide={true}
              showControls={false}
              showIndicators={true}
              multiItem >
              <CarouselInner>
                <Row className="carouselImage">
                  <CarouselItem itemId="1">
                    <Col md="4">
                      <Card className="mb-1">
                      <CardImage className="img-fluid" src={photo3}/>
                      </Card>
                    </Col>
                  </CarouselItem>
                  <CarouselItem itemId="2">
                    <Col md="4">
                      <Card className="mb-1">
                      <CardImage className="img-fluid" src={photo4} />
                      </Card>
                    </Col>
                  </CarouselItem>
                  <CarouselItem itemId="3">
                    <Col md="4">
                      <Card className="mb-1">
                      <CardImage className="img-fluid" src={photo5} />
                      </Card>
                    </Col>
                  </CarouselItem>
                </Row>
              </CarouselInner>

            </Carousel>

        </Container>
        </div>
    )
  }

}
