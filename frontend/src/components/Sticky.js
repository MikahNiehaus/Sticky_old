import React, { Component } from 'react'//getting react

export default class Sticky extends Component {
   
      handleClose = (event) => {
        event.preventDefault();
        this.props.deleteSticky(this.props.id)
      }
      importantCheck (){
        if (this.props.important){
           return (<h3 onClick={this.changeImpotants} style={{background: 'red' }}>important</h3>)
        } 
      }
    
    render() {
  return (
       <section  className="Sticky" style={{background: 'rgb(96, 0, 151)'}} >
          <label>{this.props.body}</label>
         {this.importantCheck()}
         <form onSubmit={this.handleClose }>
          <button style={{opacity: '0.5', position: 'absolute', top: '0px', right: '0px', color: 'grey', cursor: 'pointer'}} type="submit">x</button>
          </form>
       </section>
  
  );
    }
}

