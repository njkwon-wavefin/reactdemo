import {URL_LIST,URL_SEARCH, URL_DETAIL, URL_CAST, URL_VIDEO, API_KEY, API_KEY_ALT} from '../const';
// action types
export const SEARCH_MOVIE = 'SEARCH_MOVIE';
export const SEARCH_MOVIE_SUCCESS = 'SEARCH_MOVIE_SUCCESS';
export const SEARCH_MOVIE_FAILURE = 'SEARCH_MOVIE_FAILURE';
export const FETCH_MOVIES = 'FETCH_MOVIES';
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS';
export const FETCH_MOVIES_FAILURE = 'FETCH_MOVIES_FAILURE';
export const RESET_MOVIES = 'RESET_MOVIES';
export const FETCH_MOVIE = 'FETCH_MOVIE';
export const FETCH_MOVIE_SUCCESS = 'FETCH_MOVIE_SUCCESS';
export const FETCH_MOVIE_FAILURE = 'FETCH_MOVIE_FAILURE';
export const FETCH_CASTS = 'FETCH_CASTS';
export const FETCH_CASTS_SUCCESS = 'FETCH_CASTS_SUCCESS';
export const FETCH_CASTS_FAILURE = 'FETCH_CASTS_FAILURE';
export const FETCH_TRAILERS = 'FETCH_TRAILERS';
export const FETCH_TRAILERS_SUCCESS = 'FETCH_TRAILERS_SUCCESS';
export const FETCH_TRAILERS_FAILURE = 'FETCH_TRAILERS_FAILURE';
export const SELECT_MOVIE = 'SELECT_MOVIE';
export const ENTER_SEARCH_TEXT = 'ENTER_SEARCH_TEXT';

// action creators
function enterSearchText(searchText){
  return {
    type: ENTER_SEARCH_TEXT,
    searchText
  };
}

function searchMovie() {
  return {
    type: SEARCH_MOVIE
  };
}

function searchMovieSuccess(data) {
  return {
    type: SEARCH_MOVIE_SUCCESS,
    data
  };
}

function searchMovieFail(error) {
  return {
    type: SEARCH_MOVIE_FAILURE,
    error
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

function fetchMoviesDone() {
  return {
    type: RESET_MOVIES
  };
}

function fetchMovie() {
  return {
    type: FETCH_MOVIE
  };
}

function fetchMovieSuccess(data) {
  return {
    type: FETCH_MOVIE_SUCCESS,
    data
  };
}

function fetchMovieFail(error) {
  return {
    type: FETCH_MOVIE_FAILURE,
    error
  };
}

function fetchCasts() {
  return {
    type: FETCH_CASTS
  };
}

function fetchCastsSuccess(data) {
  return {
    type: FETCH_CASTS_SUCCESS,
    data
  };
}

function fetchCastsFail(error) {
  return {
    type: FETCH_CASTS_FAILURE,
    error
  };
}

function fetchTrailers() {
  return {
    type: FETCH_TRAILERS
  };
}

function fetchTrailersSuccess(data) {
  return {
    type: FETCH_TRAILERS_SUCCESS,
    data
  };
}

function fetchTrailersFail(error) {
  return {
    type: FETCH_TRAILERS_FAILURE,
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
export function searchMovieList(text){
  let url = URL_SEARCH + text + API_KEY_ALT;
  return function(dispatch){
    dispatch(searchMovie())
    return fetch(url)
      .then(response => response.json())
      .then( json => json.results)
      .then( data => dispatch(searchMovieSuccess(data)))
  }
}

export function fetchMovieList(){
  const url = URL_LIST + API_KEY;
  return function(dispatch){
    dispatch(fetchMovies());
    return fetch(url)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => dispatch(fetchMoviesSuccess(data)))
      .catch(error => dispatch(fetchMoviesFail(error)))
  }
}

export function fetchMovieDetail(id){
  const url_movie = URL_DETAIL + id + API_KEY;
  return function(dispatch){
    dispatch(fetchMovie())
    return fetch(url_movie)
      .then(response => response.json())
      .then(data => dispatch(fetchMovieSuccess(data)))
  }
}

export function fetchCastList(id){
  const url_casts = URL_DETAIL + id + URL_CAST + API_KEY;
  return function(dispatch){
    dispatch(fetchCasts())
    return fetch(url_casts)
      .then(response => response.json())
      .then(json => json.cast)
      .then(data => dispatch(fetchCastsSuccess(data)))
  }
}

export function fetchTrailerList(id){
  const url_trailers = URL_DETAIL + id + URL_VIDEO + API_KEY;
  return function(dispatch){
    dispatch(fetchTrailers())
    return fetch(url_trailers)
      .then(response => response.json())
      .then(json => json.results)
      .then(data => {
        let youtubeTrailers = data.filter(function(trailer){
          return trailer.site === 'YouTube';
        });
        dispatch(fetchTrailersSuccess(youtubeTrailers));
      })
  }
}
