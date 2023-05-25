import { combineReducers } from "@reduxjs/toolkit";

import books from '../reducers/booksReducer/booksSlice'
import movies from '../reducers/moviesReducer/moviesSlice'

export const combinedReducer = combineReducers({
  books,
  movies,
})