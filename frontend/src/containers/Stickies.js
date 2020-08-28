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
        tittle: '',
      id: 0
    };
   
   
  }




  handleTittleChange = (event) => {
    this.setState({tittle: event.target.value});

  // window.document.getElementById("stuff").innerText = this.state.value;
  }
 
  // handleOnSubmit(event) {
  //   event.preventDefault();
  //   this.props.addRestaurant(this.state.text)
  //   this.setState({
  //     text: ''
  //   });
  // }
 

  handleSubmit = (event) => {
    event.preventDefault();
  
    this.setState(prevState => ({
      id: prevState.id + 1,
      output: [...prevState.output,  { tittle: this.state.tittle, id: prevState.id + 1}]
      
    }));
    this.props.addSticky(this.state.tittle)
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
        {this.state.output.map(sticky =>  <Sticky tittle={sticky.tittle} key={sticky.id} id={sticky.id} time={sticky.time}  removeSticky={this.removeSticky}/>)}
        </div>
      </form>
    );
  }

}
// const mapStateToProps = (state) => {
//   return {
//       // dogs: state.dogReducer.dogs,
//       body: state.stickyReducer.body
//   }
// }

// const mapStateToProps = state => ({ stickies: state.stickies })
//is used for dispatching actions to the store.
//dispatch is a function of the Redux store
const mapDispatchToProps = dispatch => ({
  addSticky: payload => dispatch({type: 'ADD_STICKY', payload}),//action = {trype, paylaod }

})
// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
export default connect(null, mapDispatchToProps)(Stickies)//google connect
//mapStateToProps