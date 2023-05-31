import { createSlice } from '@reduxjs/toolkit'
import { getAllQuotes } from './actionReducer/getAllQuotes';

type State = {
  quotes: any[];
  total: number;
}

const initialState: State = {
  quotes: [],
  total: 0
}

const quotesSlice = createSlice({
  name: 'quotes',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllQuotes.fulfilled, (state, action) => {
      state.quotes = action.payload.docs
      state.total = action.payload.total
    })
  }

})

export default quotesSlice.reducer;