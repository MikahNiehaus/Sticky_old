import React, { Component } from 'react'
import Sticky from '../components/Sticky';
import { connect } from 'react-redux'
import { postSticky } from '../actions/postSticky'
import { deleteSticky } from '../actions/deleteSticky'

class Stickies extends Component {
  constructor(props) {
    super(props);
    //state is Dictinary 
    this.state = {
      output: [],
        body: '',
      id: 0
    };
   
   
  }

   componentDidMount() {
    
    // this.setState({output: this.props.allStickies});
    console.log("Loading sc")
   }
   handleBodyChange = (event)=>{
    this.setState({body: event.target.value});

  }
  handleSubmit = (event) => {
    event.preventDefault();
  
    this.props.postSticky({body: this.state.body, important: false})

  }
  

  removeSticky = id => {
    this.setState(prevState => ({
      output: prevState.output.filter(sticky => sticky.id !== id)
    }))
    this.props.deleteSticky(id)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
     
        <h1>Add Sticky</h1>
        <label>
          Text: 
          <input type="text" value={this.state.value} onChange={this.handleBodyChange} />
        
        </label>
        <input type="submit" value="Submit" />
        <div className="mySticky">
        {/* {this.state.output.map(sticky =>  <Sticky body={sticky.body} key={sticky.id} id={sticky.id} time={sticky.time}  removeSticky={this.removeSticky}/>)} */}
        {this.props.getStickies.map(sticky =>  <Sticky body={sticky.body} key={sticky.id} id={sticky.id}  removeSticky={this.removeSticky}/>)}
        {/* {console.log("!!!MAP!!!",this.props.getStickies)} */}
        </div>
      </form>
    );
  }

}


// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
export default connect(null,{deleteSticky, postSticky})(Stickies)