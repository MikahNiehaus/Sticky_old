import Sticky from '../components/Sticky';
import React, { Component } from 'react'
class ImportantStickies extends Component {

    addSticky = (sticky) => {
        if (sticky.important){
       return (<Sticky key={sticky.id} body={sticky.body} important={false} id={sticky.id}  removeSticky={this.removeSticky}/>)
        }
    }

    render() {
    return (
        <div>
            <h1>Important Stickies</h1>
        {this.props.output.reverse().map(sticky => this.addSticky(sticky) )}
           
        </div>
    )}
}



export default (ImportantStickies)