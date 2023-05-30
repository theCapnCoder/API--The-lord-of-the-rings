import { createSlice } from '@reduxjs/toolkit'
import { getAllQuotes } from './actionReducer/getAllQuotes';

const quotesSlice = createSlice({
  name: 'quotes',
  initialState: {
    quotes: []
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllQuotes.fulfilled, (state, action) => {
      state.quotes = action.payload.docs
    })
  }

})

export default quotesSlice.reducer;