import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import {MovieList, MovieDetail} from './containers';
import {DisplayMsg} from './components';

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={MovieList} />
      <Route path="/movie/:id" component={MovieDetail} />
      <Route path="*" component={DisplayMsg} />
    </Route>
</Router>,
  document.getElementById('root')
);
