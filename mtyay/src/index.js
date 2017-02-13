import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';
import routes from './routes'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import reduxPromise from 'redux-promise'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'

const store = createStore(rootReducer, applyMiddleware(reduxPromise))


ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes} />
  </Provider>
  ,
  document.getElementById('root')
);
