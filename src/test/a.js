import React, { Component } from 'react';

export class Class1 extends Component {
    render() {
       return (
        <div onClick={this.props.callApi}></div>
       )
    }
 }