// import React from 'react';
import { connect } from 'react-redux'
import Sticky from '../components/Sticky';
import React, { Component } from 'react'
import { getStickies } from '../actions/getStickies'
class ImportantStickies extends Component {

    addSticky = (sticky) => {
        if (sticky.important){
       return (<Sticky body={sticky.body} important={false} id={sticky.id}  removeSticky={this.removeSticky}/>)
        }
    }

    render() {
    return (
        <div>
            <h1>Important Stickies</h1>
        {this.props.output.map(sticky => this.addSticky(sticky) )}
           
        </div>
    )}
}


const mapStateToProps = (state) => {
    return {
        output: state.stickies,
        loading: state.loading
    }
  }
export default connect(mapStateToProps, {getStickies})(ImportantStickies)