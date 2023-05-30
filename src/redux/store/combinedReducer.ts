import { combineReducers } from "@reduxjs/toolkit";

import books from '../reducers/booksReducer/booksSlice'
import movies from '../reducers/moviesReducer/moviesSlice'
import chapters from '../reducers/chaptersReducer/chaptersSlice'
import quotes from '../reducers/quotesReducer/quotesSlice'

export const combinedReducer = combineReducers({
  books,
  movies,
  chapters,
  quotes,
})