// import React from 'react';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Stickies from './Stickies';
import HomePage from './HomePage';
import ImportantStickies from './ImportantStickies';


import { connect } from 'react-redux'
class App extends Component {

componentDidMount() {
  // this.props.getStickies()
}
handleLoading = () => {
  console.log('this.props.loading',this.props.loading)
  console.log('this.props.output',this.props.output)
  if(this.props.loading) {
    return <div>Loading...</div>
  } else {
    console.log("this.props.getStickies",this.props.output)
    return (<Router>
      <div>
        <NavBar />
        <Route exact path="/" render={() => <HomePage></HomePage>} />
        <Route path='/stickynotes' render={() => <Stickies ></Stickies>} />
        <Route path='/importantnotes' render={() => <ImportantStickies></ImportantStickies>} />
      </div>
    </Router>);
  }
}
render() {
  return (
    <div className="App">
      {this.handleLoading()}
    </div>
  );
}
}
 



// const mapDispatchToProps = state => {
//   return {
//     getStickies: state.stickies,
//     loading: state.loading,
//     postSticky: state.stickies
//   }
// }
// const mapDispatchToProps = dispatch => ({
//   postStickies: payload => dispatch({type: 'POST_STICKY', payload}),//action = {trype, paylaod }
//   deleteSticky: payload => dispatch({type: 'DELETE_STICKY', payload }),
//   getStickies
// })

//DO IT THE WAY ABOVE
//BUT IF YOU MUST PASS IN AN OBJECT INSTEAD OF A FUNCTION,
//PLEASE DO NOT DESTRUCTURE
//GIVE THEM NEW KEYS SO THAT YOU REMEMBER THE DIFFERENCE
//{ dispatchedAddBooks: addBooks }
// routerProps
export default (App)