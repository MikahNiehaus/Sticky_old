import React, { Component } from 'react'
import Sticky from '../components/Sticky';
import { connect } from 'react-redux'

class Stickies extends Component {
  constructor(props) {
    super(props);
    //state is Dictinary 
    this.endpoint = '/api/stickys';
    this.state = {
      output: [],
        body: '',
      id: 0
    };
   
   
  }

   componentDidMount() {
    
    this.setState({output: this.props.allStickies});
    console.log("Loading Stickies state",this.state)
   }
 

  handleSubmit = (event) => {
    event.preventDefault();
  
    this.setState(prevState => ({
      id: prevState.id + 1,
      output: [...prevState.output,  { body: this.state.body, id: prevState.id + 1}],
      body: ''
    }));
    this.props.addSticky(this.state.body)
  
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
        {this.props.allStickies.map(sticky =>  <Sticky body={sticky.body} key={sticky.id} id={sticky.id} time={sticky.time}  removeSticky={this.removeSticky}/>)}
        </div>
      </form>
    );
  }

}
const mapStateToProps = (state) => {
  console.log("mapping State To Props");
  return {
      output: state.stickyReducer
  }
}

// const mapStateToProps = state => ({ stickies: state.stickies })
//is used for dispatching actions to the store.
//dispatch is a function of the Redux store
const mapDispatchToProps = dispatch => ({
  addSticky: payload => dispatch({type: 'ADD_STICKY', payload}),//action = {trype, paylaod }
  deleteSticky: payload => dispatch({type: 'DELETE_STICKY', payload })
})
// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
export default connect(mapStateToProps, mapDispatchToProps)(Stickies)//google connect
//mapStateToProps