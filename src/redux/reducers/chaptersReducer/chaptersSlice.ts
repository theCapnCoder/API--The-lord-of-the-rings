import { createSlice } from '@reduxjs/toolkit'
import { getAllChapters } from './actionReducer/getAllChapters'

type Chapter = {
  _id: string,
  chapterName: string,
}

type State = {
  chapters: Chapter[];
}

const initialState: State = {
  chapters: [],
}

const chaptersSlice = createSlice({
  name: 'chapters',
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllChapters.fulfilled, (state, action) => {
      state.chapters = action.payload.docs
    })
  }
})

export default chaptersSlice.reducer;