import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App';
import thunk from 'redux-thunk';
// import Reducer from './reducers/catsReducer.js';
import { Provider } from 'react-redux';
//Provider is using the technology of the context API
import { createStore, applyMiddleware } from 'redux'
import stickyReducer from './reducers/stickysReducer'
//MIDDLEWARE IS ANY BIT OF CODE THAT INTERCEPTS A PROCESS AND CHANGES THE OUTCOME
const store = createStore(stickyReducer, applyMiddleware(thunk))


ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);