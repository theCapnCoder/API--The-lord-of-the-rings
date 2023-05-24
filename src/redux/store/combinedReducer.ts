import { combineReducers } from "@reduxjs/toolkit";

import books from '../reducers/booksReducer/booksSlice'

export const combinedReducer = combineReducers({
  books,
})