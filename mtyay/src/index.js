import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import routes from './routes'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import reduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import thunk from 'redux-thunk'

const store = createStore(rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    applyMiddleware(reduxPromise, thunk))


ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('root')
);
