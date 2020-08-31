import React, { Component } from 'react'//getting react

export default class Sticky extends Component {
   
      handleClose = () => {
        this.props.removeSticky(this.props.id)
      }
      importantCheck (){
        if (this.props.important){
           return (<h3 onClick={this.changeImpotants} style={{background: 'red' }}>important</h3>)
        } 
      }
    
    render() {
  return (
       <section className="Sticky" style={{background: '#ffff66'}} >
          <h4>{this.props.body}</h4>
         {this.importantCheck()}
          <small onClick={ this.handleClose }>X</small>
       </section>
  
  );
    }
}

