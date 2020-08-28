// import React from 'react';
import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Stickies from './Stickies';
import HomePage from './HomePage';
import ImportantStickies from './ImportantStickies';
import { fetchStickies } from '../reducers/actions'
import { connect } from 'react-redux'

class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }
  componentDidMount(){
    this.props.dispatchFetchBooks()
    
    //WHY DO WE USE THUNK? ORGANIZATION
    //THIS LOGIC HAS NOTHING TO DO WITH THIS COMPONENT, IT HAS EVERYTHING TO DO WITH CHANGING THE REDUX STORE'S STATE
    //LET'S GET RID OF IT
    //IT STILL WORKS, BUT LET'S MAKE OUR ACTION TAKE CARE OF IT

    // fetch("https://www.googleapis.com/books/v1/volumes?q=dogs")
    //   .then(res => res.json())
    //   .then(booksObj => {
    //     this.props.dispatchAddBooks(booksObj.items)
    //   })
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <HomePage></HomePage>} />
          <Route path='/stickynotes' render={() => <Stickies></Stickies>} />
          <Route path='/importantnotes' render={() => <ImportantStickies></ImportantStickies>} />
        </div>
      </Router>
    );
  }
}

function mSTP(state){
  return {
    stickies: state.stickies
  }
}

function mDTP(dispatch){
  return {
    dispatchFetchBooks: (items) => dispatch(fetchStickies(items)),
  }
}
//DO IT THE WAY ABOVE
//BUT IF YOU MUST PASS IN AN OBJECT INSTEAD OF A FUNCTION,
//PLEASE DO NOT DESTRUCTURE
//GIVE THEM NEW KEYS SO THAT YOU REMEMBER THE DIFFERENCE
//{ dispatchedAddBooks: addBooks }
// routerProps
export default connect(mSTP, mDTP)(App);