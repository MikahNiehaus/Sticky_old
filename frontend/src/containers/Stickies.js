import React, { Component } from 'react'
import StickyInput from '../components/StickyInput';
import StickyList from '../components/StickyList';

export default class Stickies extends Component {
  constructor(props) {
    super(props);
    };

  render() {
    return (
       <div className="mySticky">
         <h1>Add Sticky</h1>
        <StickyInput postSticky={this.props.postSticky} handleSubmit={this.handleSubmit}></StickyInput>
        <StickyList output={this.props.output} deleteSticky={this.props.deleteSticky}></StickyList>
       </div>
    );
  }

}

