import React, { Component } from 'react'
import Sticky from '../components/Sticky';


export default class Stickies extends Component {
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
    if (this.state.important == false){
      this.setState({important: true, background: 'red'});
    } else if (this.state.important == true){
        this.setState({important: false, background: 'lightblue'});
      } 
  }

  handleSubmit = (event) => {
  event.preventDefault();
  //fix this
  const value = {body: this.state.body, important: this.state.important};
    this.props.postSticky(value)
    this.setState({
      body: '',
      important: false,
      background: 'lightblue'
    });

  }
  //not my code
  handleOnSubmit(event) {
    event.preventDefault();
    this.props.addRestaurant(this.state.text)
    this.setState({
      text: ''
    });
  }




  render() {
    return (
       <div className="mySticky">
      <form onSubmit={this.handleSubmit}>
     
        <h1>Add Sticky</h1>
        <label>
          Text: 
          <input type="text" value={this.state.body} onChange={this.handleBodyChange} />
        
          <input type="submit" value="Submit" />
        </label>
      
      </form>
      <form onSubmit={this.handleCheckChange}>

      <input type="submit" style={{background: this.state.background}} value="important"/>
     
      </form>
     
        {this.props.output.reverse().map(sticky =>  <Sticky body={sticky.body} key={sticky.id} important={sticky.important} id={sticky.id}  deleteSticky={this.props.deleteSticky}/>)}
  
      </div>
    );
  }

  


}

