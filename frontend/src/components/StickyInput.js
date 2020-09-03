import React, { Component } from 'react'

export default class StickyInput extends Component {
    constructor(props) {
        super(props);
        //state is Dictinary 
        this.state = {
            body: '',
            important: false,
            background: 'lightblue'
        };
       
       
      }
    
        handleBodyChange = (event)=>{
            this.setState({
              body: event.target.value
            });
           
          }
        
          handleCheckChange = (event)=>{
            event.preventDefault();
            if (this.state.important === false){
              this.setState({important: true, background: 'red'});
            } else if (this.state.important === true){
                this.setState({important: false, background: 'lightblue'});
              } 
          }
        
          handleSubmit = (event) => {
          event.preventDefault();
          const value = {body: this.state.body, important: this.state.important};
            this.props.postSticky(value)
            this.setState({
              body: '',
              important: false,
              background: 'lightblue'
            });
        
          }
    
    render() {
  return (
      <div> 
     <form onSubmit={this.handleSubmit}>
     <label>
       Text: 
       <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
     
       <input type="submit" value="Submit" />
     </label>
   </form>
   <form onSubmit={this.handleCheckChange}>
   <input type="submit" style={{background: this.state.background}} value="important"/>
   </form>
    </div>
  
  );
    }
}

