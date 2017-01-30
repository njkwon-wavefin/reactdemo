import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import App from './App';
import movieApp from './reducers';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import {Router, Route, hashHistory, IndexRoute} from 'react-router';
import {MovieContainer, MovieDetail} from './containers';
import {DisplayMsg} from './components';

let store = createStore(movieApp,applyMiddleware(thunkMiddleware));

ReactDOM.render(
  <Provider store={store}>
    <Router history={hashHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={MovieContainer} />
        <Route path="/movie/:id" component={MovieDetail} />
        <Route path="*" component={DisplayMsg} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
