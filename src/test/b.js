import React, { Component } from 'react';

export class Class2 extends Component {
  callApi = () => {
      return 'Here I call my API, I set & call states, ...';
   }

  render() {
      return (
         <Class1 callApi={this.callApi} />
       )    
  }   
}