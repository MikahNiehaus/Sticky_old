import React, { Component } from 'react'//getting react

export default class Sticky extends Component {
    constructor(){
        super();
        this.state = {
            input: '',
            color: '#'+Math.floor(Math.random()*16777215).toString(16),
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
      //  const { time, color, className } = this.state
  return (
       <section className="Sticky" style={{background: this.state.color}} >
        {/* <dif style={{background: 'white'}} > */}
          <h1>{this.state.time} {this.props.body}</h1>
          {/* </dif> */}
          <textarea style={{width: 230, height: 200}} type="text" value={this.state.value} onChange={this.handleChange} />
          <aside className="mountText">Posted</aside>
          <small onClick={ this.handleClose }>X</small>
       </section>
  
  );
    }
}

