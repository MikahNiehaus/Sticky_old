import React, { Component } from 'react'
import Sticky from '../components/Sticky';


class Stickies extends Component {
  constructor(props) {
    super(props);
    //state is Dictinary 
    this.state = {
      // output: [],
        body: '',
        important: false
      // id: 0
    };
   
   
  }
  
  
   handleBodyChange = (event)=>{
    this.setState({body: event.target.value});
   
  }
  handleClickChange = (event)=>{
    let x = false;
    if (this.state.important === false){
      x = true;
    } else{
      x = false;
    }
    this.setState({important: x});

  }
  handleSubmit = (event) => {
  event.preventDefault();
  console.log('handleSubmit POST_STICKY',{body: this.state.body, important: this.state.important} )
  //fix this
  const value = {body: this.state.body, important: this.state.important};
    this.props.postSticky(value)
    this.setState({
      body: ''
    });

  }
  


  render() {
    return (
       <div className="mySticky">
      <form onSubmit={this.handleSubmit}>
     
        <h1>Add Sticky</h1>
        <label>
          Text: 
          <input type="text" value={this.state.value} onChange={this.handleBodyChange} />
        
          <input type="submit" value="Submit" />
        </label>
        <label>
        <input type="checkbox" onClick={this.handleClickChange} name="color" value="red"/> important
        </label>
      </form>
      
        {this.list}
   
      </div>
    );
  }

  
list = () => {
  if(this.props.output){
    return this.props.output.reverse().map(sticky =>  <Sticky body={sticky.body} key={sticky.id} important={sticky.important} id={sticky.id}  deleteSticky={this.props.deleteSticky}/>)
  }
  }

}




// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
export default (Stickies)
//<createSticky value={this.state.value} handleClickChange={this.handleClickChange} handleSubmit={this.handleSubmit} handleBodyChange={this.handleBodyChange}></createSticky>
