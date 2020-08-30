import React, { Component } from 'react'//getting react

export default class Sticky extends Component {

   
    handleChange = (event) => {
        this.setState({input: event.target.value});
      }
      handleClose = () => {
        this.props.removeSticky(this.props.id)
      }
    
    render() {
  return (
       <section className="Sticky" style={{background: '#ffff66'}} >
          <h4>{this.props.body}</h4>
          {/* <aside className="mountText">Posted</aside> */}
          <small onClick={ this.handleClose }>X</small>
       </section>
  
  );
    }
}

