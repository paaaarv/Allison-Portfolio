import React from 'react';
import { Component } from 'react';
import InstagramEmbed from 'react-instagram-embed'



export default class Instagram extends React.Component{


    render(){
      return(
        <div>
        <InstagramEmbed
  url='https://www.instagram.com/alpantsmandy/'
  maxWidth={320}
  hideCaption={false}
  containerTagName='div'
  protocol=''
  injectScript
  onLoading={() => {}}
  onSuccess={() => {}}
  onAfterRender={() => {}}
  onFailure={() => {}}
/>
</div> 
      )
    }


}
