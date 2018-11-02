import React from 'react';
import { Component } from 'react';
import photo from '../images/IMG_1193.jpeg'
import {View, Mask} from 'mdbreact'

export default class About extends React.Component {



  render(){
    return(

      <div className='about'>
      <h3 className = "lineHeading"> ABOUT ALLISON </h3>
      <hr className="horizontal-line" align="center"/>
      <div className='row'>
      <View className="col-md-4">
        <img src={photo} className="profile-pic float-left img-fluid" alt="" />
      </View>
      <p className='col-md-7 about-body'> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper velit sed ullamcorper morbi tincidunt ornare massa eget. Iaculis at erat pellentesque adipiscing commodo. Lacus viverra vitae congue eu consequat ac felis donec et. Eleifend mi in nulla posuere.</p>
      </div>
      </div>


    )
  }



}
