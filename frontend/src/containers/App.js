import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Stickies from './Stickies';
import HomePage from './HomePage';
import ImportantStickies from './ImportantStickies';
import { connect } from 'react-redux'
import { postSticky } from '../actions/postSticky'
import { deleteSticky } from '../actions/deleteSticky'
import { getStickies } from '../actions/getStickies'
class App extends Component {

  componentDidMount() {
    this.props.getStickies()
  }
  

render() {
  return (<Router>
    <div>
      <NavBar />
      <Route exact path="/" render={() => <HomePage></HomePage>} />
      <Route path='/stickynotes' render={() => <Stickies getStickies={this.props.getStickies} postSticky={this.props.postSticky} deleteSticky={this.props.deleteSticky} output={this.props.output} ></Stickies>} />
      <Route path='/importantnotes' render={() => <ImportantStickies  output={this.props.output}></ImportantStickies>} />
    </div>
  </Router>);
}
}
const mapStateToProps = (state) => {
  console.log("mapping State To Props",state.stickies);
  return {
      output: state.stickies
  }
}
// const mapDispatchToProps = dispatch => ({
//   getStickies: stickies => dispatch({type: 'GET_STICKIES', stickies}),//action = {trype, paylaod }
//   deleteSticky: id => dispatch({type: 'DELETE_STICKY', id}),
//   postSticky: sticky => dispatch({type: 'GET_STICKIES', sticky})
// })
//  const mapDispatchToProps = {getStickies, postSticky,deleteSticky};

export default connect(mapStateToProps,{getStickies, postSticky,deleteSticky})(App)