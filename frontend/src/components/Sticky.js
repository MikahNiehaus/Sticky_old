import React, { Component } from 'react'//getting react

export default class Sticky extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
            color: '#ffff66',
            time: this.getTime()
          };
    }
    getTime(){
      let date = new Date()
     let hour = date.getHours();
     let minutes = date.getMinutes();
      return hour + ":" + minutes;
    }

    handleChange = (event) => {
        this.setState({input: event.target.value, time: this.getTime()});
      }
      handleClose = () => {
        this.props.removeSticky(this.props.id)
      }
    
    render() {
  return (
       <section className="Sticky" style={{background: this.state.color}} >
          <h4>{this.props.body}</h4>
          <aside className="mountText">Posted</aside>
          <small onClick={ this.handleClose }>X</small>
       </section>
  
  );
    }
}

