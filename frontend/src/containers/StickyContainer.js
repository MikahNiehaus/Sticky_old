import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Stickies from './Stickies';
import HomePage from './HomePage';
import ImportantStickies from './ImportantStickies';


// import { connect } from 'react-redux'
class StickyContainer extends Component {

componentDidMount() {
  // this.props.getStickies()
}
handleLoading = () => {
  if(this.props.loading) {
    return <div>Loading...</div>
  } else {
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
 

export default (StickyContainer)