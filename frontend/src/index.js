// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './containers/App';
// import * as serviceWorker from './serviceWorker';


// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import React from 'react';
import { render } from 'react-dom';
import App from './containers/App';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import catsReducer from './reducers/catsReducer.js';
import { Provider } from 'react-redux';

const store = createStore(catsReducer, applyMiddleware(thunk))
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);