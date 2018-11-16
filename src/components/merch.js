import React from 'react';
import { Component } from 'react';
import {Card, CardImage, CardBody, Button, CardTitle, CardText, Fa} from 'mdbreact';



export default class Merch extends React.Component{

  render(){
    return(
      <div className= "projects-div">
      <h1 className="lineHeading"> SHOP </h1>
      <hr className="horizontal-line" align="center"/>
      <Card className="col-md-3 merch-card"cascade>
    <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
    <CardBody cascade>
        <CardTitle>Card title</CardTitle>
        <Button size="md" outline color="pink" href="#">Add to Cart</Button>
    </CardBody>
</Card>
<Card className=" merch-card col-md-3"cascade>
    <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
    <CardBody cascade>
        <CardTitle>Card title</CardTitle>
        <Button size="md" outline color="pink" href="#">Add to Cart</Button>
    </CardBody>
</Card>
<Card className="merch-card col-md-3"cascade>
    <CardImage cascade className="img-fluid" src="https://mdbootstrap.com/img/Photos/Horizontal/Nature/4-col/img%20%282%29.jpg" />
    <CardBody cascade>
        <CardTitle>Card title</CardTitle>
        <Button size="md" outline color="pink" href="#">Add to Cart</Button>
    </CardBody>
</Card>
</div>
    )
  }


}
