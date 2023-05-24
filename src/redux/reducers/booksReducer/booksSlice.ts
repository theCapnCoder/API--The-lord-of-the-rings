import { createSlice } from '@reduxjs/toolkit'
import { getAllBooks } from './actionCreators/getAllBooks';

const data = {
  "docs": [
    {
      "_id": "5cf5805fb53e011a64671582",
      "name": "The Fellowship Of The Ring"
    },
    {
      "_id": "5cf58077b53e011a64671583",
      "name": "The Two Towers"
    },
    {
      "_id": "5cf58080b53e011a64671584",
      "name": "The Return Of The King"
    }
  ],
  "total": 3,
  "limit": 1000,
  "offset": 0,
  "page": 1,
  "pages": 1
}

export type Book = {
  _id: string;
  name: string
}

type State = {
  books: Array<Book>
}

const initialState: State = {
  books: [ ],
}

const booksSlice = createSlice({
  name: 'books',
  initialState: initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder.addCase(getAllBooks.fulfilled, (state, action) => {
      state.books = action.payload.docs
    })
  }
})

export default booksSlice.reducer;
