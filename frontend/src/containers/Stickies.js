import React, { Component } from 'react'
import Sticky from '../components/Sticky';
import { connect } from 'react-redux'
import { postSticky } from '../actions/postSticky'
import { deleteSticky } from '../actions/deleteSticky'
import { getStickies } from '../actions/getStickies'

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
  componentDidMount() {
    this.props.getStickies()
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
  //  event.preventDefault();
  
    this.props.postSticky({body: this.state.body, important: this.state.important})
    this.setState({
      body: ''
    });

  }
  

  removeSticky = id => {
    // this.setState(prevState => ({
    //   output: prevState.output.filter(sticky => sticky.id !== id)
    // }))
    
    console.log(this.props.output)
    this.props.deleteSticky(id)
    this.props.output.push({body: "WORKS!!"})
    console.log(this.props.output)
  }

  render() {
    return (
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
        <div className="mySticky">
        {/* {this.state.output.map(sticky =>  <Sticky body={sticky.body} key={sticky.id} id={sticky.id} time={sticky.time}  removeSticky={this.removeSticky}/>)} */}
        {this.props.output.map(sticky =>  <Sticky body={sticky.body} important={sticky.important} id={sticky.id}  removeSticky={this.removeSticky}/>)}
        {/* {console.log("!!!MAP!!!",this.props.getStickies)} */}
        </div>
      </form>
    );
  }

}
const mapStateToProps = (state) => {
  console.log("mapping State To Props",state.stickies);
  return {
      output: state.stickies,
      loading: state.loading
  }
}

// connect can accept an argument called mapDispatchToProps, which lets you create functions that dispatch when called, and pass those functions as props to your component.
export default connect(mapStateToProps,{getStickies, deleteSticky, postSticky})(Stickies)