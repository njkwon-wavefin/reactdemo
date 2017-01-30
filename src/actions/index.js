import {URL_LIST, API_KEY} from '../const';
// action types

export const SEARCH_MOVIE = 'SEARCH_MOVIE';

// Movie list
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';

export const SELECT_MOVIE = 'SELECT_MOVIE';

// action creators
export function searchMovie(movie) {
  return {
    type: SEARCH_MOVIE,
    movie: movie
  };
}

function fetchMovies() {
  return {
    type: FETCH_MOVIES
  };
}

function fetchMoviesSuccess(data) {
  return {
    type: FETCH_MOVIES_SUCCESS,
    data
  };
}

function fetchMoviesFail(error) {
  return {
    type: FETCH_MOVIES_FAILURE,
    error
  };
}

export function selectMovie(movie) {
  return {
    type: SELECT_MOVIE,
    movie
  };
}

// thunk action creators
const url = URL_LIST + API_KEY;

export function fetchMovieList(){
  return function(dispatch){
    dispatch(fetchMovies())
    return fetch(url)
      .then(response => response.json())
      .then( json => json.results)
      .then( data => dispatch(fetchMoviesSuccess(data)))
  }
}
