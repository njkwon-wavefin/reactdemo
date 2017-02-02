import {combineReducers} from 'redux';
import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE, RESET_MOVIES,
  FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_FAILURE,
  FETCH_CASTS, FETCH_CASTS_SUCCESS, FETCH_CASTS_FAILURE,
  FETCH_TRAILERS, FETCH_TRAILERS_SUCCESS, FETCH_TRAILERS_FAILURE,
  SEARCH_MOVIE, SEARCH_MOVIE_SUCCESS, SEARCH_MOVIE_FAILURE,
  ENTER_SEARCH_TEXT} from '../actions';

const defaultStateList = {
  isFetching: false,
  items:[],
  error:{}
};

const movieList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_MOVIES:
      console.log('FETCH_MOVIES ' + new Date())
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_MOVIES_SUCCESS:
      console.log('FETCH_MOVIES_SUCCESS '+ new Date())
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_MOVIES_FAILURE:
      console.log('FETCH_MOVIES_FAILURE '+ new Date())
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    case RESET_MOVIES:
      console.log('RESET_MOVIES '+ new Date())
      return Object.assign({}, state, {
        isFetching:false,
        items:[],
        error:{}
      });
    case SEARCH_MOVIE:
      return Object.assign({}, state, {
        isFetching:true
      });
    case SEARCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case SEARCH_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const castList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_CASTS:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_CASTS_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_CASTS_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const trailerList = (state = defaultStateList, action) => {
  switch (action.type){
    case FETCH_TRAILERS:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_TRAILERS_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        items:action.data
      });
    case FETCH_TRAILERS_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const defaultState = {
  isFetching: false,
  item:{},
  error:{}
};

const movieDetail = (state = defaultState, action) => {
  switch (action.type){
    case FETCH_MOVIE:
      return Object.assign({}, state, {
        isFetching:true
      });
    case FETCH_MOVIE_SUCCESS:
      return Object.assign({}, state, {
        isFetching:false,
        item:action.data
      });
    case FETCH_MOVIE_FAILURE:
      return Object.assign({}, state, {
        isFetching:false,
        error:action.data
      });
    default:
      return state;
  }
};

const input = (state = '', action) => {
  switch (action.type){
    case ENTER_SEARCH_TEXT:
      return Object.assign({}, state, {
        isFetching:true
      });
    default:
      return state;
  }
};

const movieApp = combineReducers({
  movieList,
  castList,
  trailerList,
  movieDetail,
  input
});

export default movieApp;
