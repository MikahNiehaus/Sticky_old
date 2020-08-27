import React, { Component } from 'react'
import Sticky from '../components/Sticky';
// import {fetchSticky} from '../actions/stickyActions'
// import {connect} from 'react-redux'

// export const CounterContex = React.createContext();

export default class Stickies extends Component {
  constructor(props) {
    super(props);
    //state is Dictinary 
    this.endpoint = '/api/stickys';
    this.state = {
      output: [],
        tittle: '',
        body: '',
      id: 0
    };
   
   
  }




  handleTittleChange = (event) => {
    this.setState({tittle: event.target.value});

  // window.document.getElementById("stuff").innerText = this.state.value;
  }
 

 

  handleSubmit = (event) => {
    event.preventDefault();
  
    this.setState(prevState => ({
      id: prevState.id + 1,
      output: [...prevState.output,  { tittle: this.state.tittle, body: this.state.body, id: prevState.id + 1}]
      
    }));
    
  }
  

  removeSticky = id => {
    this.setState(prevState => ({
      output: prevState.output.filter(sticky => sticky.id !== id)
    }))
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
     
        <h1>Add Sticky</h1>
        <label>
          Text: 
          <input type="text" value={this.state.value} onChange={this.handleTittleChange} />
        
        </label>
        <input type="submit" value="Submit" />
        <div className="mySticky">
        {this.state.output.map(sticky =>  <Sticky tittle={sticky.tittle} key={sticky.id} id={sticky.id} time={sticky.time} body={sticky.body} removeSticky={this.removeSticky}/>)}
        </div>
      </form>
    );
  }

}
const mapStateToProps = (state) => {
  return {
      dogs: state.dogReducer.dogs,
      loading: state.dogReducer.loading
  }
}
