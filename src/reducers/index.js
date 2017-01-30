import {combineReducers} from 'redux';
import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE} from '../actions';

const defaultState = {
  isFetching: false,
  items:[],
  error:{}
};

const movieList = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_MOVIES:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_MOVIES_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_MOVIES_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const movieApp = combineReducers({
  movieList
});

export default movieApp;
