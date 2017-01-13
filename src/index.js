import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import {Router, Route, browserHistory, IndexRoute} from 'react-router';
import Item from './components/Item';
import MovieList from './pages/MovieList';
import MovieDetail from './pages/MovieDetail';

/*
ReactDOM.render(
  <Routes history={browserHistory} />,
  //<App />,
  document.getElementById('root')
);
*/

ReactDOM.render(
  <Router history={browserHistory} >
    <Route path="/" component={App}>
      <IndexRoute component={MovieList} />
      <Route path="/movie/:id" component={MovieDetail} />
    </Route>
</Router>,
  document.getElementById('root')
);
