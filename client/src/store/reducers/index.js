import { combineReducers } from 'redux';
import booksReducer from './booksReducer.js';
import dateReducer from './dateReducer.js';
import favoritesReducer from './favoritesReducer.js';

const reducer = combineReducers({
  books: booksReducer,
  date: dateReducer,
  favorites: favoritesReducer
})

export default reducer  