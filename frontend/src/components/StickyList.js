import Sticky from '../components/Sticky';
import React, { Component } from 'react'

export default class StickyList extends Component  {
    constructor(props) {
        super(props);
        };

        render(){
    return(
        <div>
        {this.props.output.reverse().map(sticky =>  <Sticky body={sticky.body} key={sticky.id} important={sticky.important} id={sticky.id}  deleteSticky={this.props.deleteSticky}/>)}
        </div>
        );
    }
}