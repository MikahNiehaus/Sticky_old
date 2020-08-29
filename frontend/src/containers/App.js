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

componentDidMount() {
  this.props.fetchStickies()
}
handleLoading = () => {
  console.log(this.props.loading)
  if(this.props.loading) {
    return <div>Loading...</div>
  } else {
    console.log("this.props.getStickies",this.props.getStickies)
    return (<Router>
      <div>
        <NavBar />
        <Route exact path="/" render={() => <HomePage></HomePage>} />
        <Route path='/stickynotes' render={() => <Stickies allStickies={this.props.getStickies}></Stickies>} />
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
 
// handleBodyChange = (event) => {
//   this.setState({body: event.target.value});

// // window.document.getElementById("stuff").innerText = this.state.value;
// }



const mapDispatchToProps = state => {
  return {
    getStickies: state.stickies,
    loading: state.loading
  }
}

//DO IT THE WAY ABOVE
//BUT IF YOU MUST PASS IN AN OBJECT INSTEAD OF A FUNCTION,
//PLEASE DO NOT DESTRUCTURE
//GIVE THEM NEW KEYS SO THAT YOU REMEMBER THE DIFFERENCE
//{ dispatchedAddBooks: addBooks }
// routerProps
export default connect(mapDispatchToProps, { fetchStickies })(App)