import React from 'react';
import ReactDOM from 'react-dom';
import {Router, Route, IndexRoute, browserHistory} from 'react-router'
import {Provider} from 'react-redux';
import {store} from '../store';
import AppContainer from './containers/AppContainer'
import Home from './containers/Home'


export const initDOM = () => {
    ReactDOM.render(
      <Provider store = {store} key = "provider">
        <Router history = {browserHistory}>
          <Route path = '/' component = {AppContainer}>
            <IndexRoute component = {Home}/>
          </Route>
        </Router>
      </Provider>,
      document.querySelector('#main')
    );
};
