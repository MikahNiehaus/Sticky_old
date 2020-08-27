// import React from 'react';
import '../components/Stickies.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Stickys from '../components/Stickies';
import HomePage from './HomePage';


class App extends Component {

  state = {
    movies: {
      1: { id: 1, title: 'A River Runs Through It' },
      2: { id: 2, title: 'Se7en' },
      3: { id: 3, title: 'Inception' }
    }
  }

  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path="/" render={() => <HomePage></HomePage>} />
          <Route path='/stickynotes' render={() => <Stickys></Stickys>} />
        </div>
      </Router>
    );
  }
}
// routerProps
export default App;