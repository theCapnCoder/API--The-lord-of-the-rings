import { createSlice } from '@reduxjs/toolkit'
import { getAllMovies } from './actionReducer/getAllMovies';

export type Movie = {
  _id: string;
  name: string;
  runtimeInMinutes: number;
  budgetInMillions: number;
  boxOfficeRevenueInMillions: number;
  academyAwardNominations: number;
  academyAwardWins: number;
  rottenTomatoesScore: number;
}


type State = {
  movies: Movie[];
}


const initialState: State = {
  movies: [],
}

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder.addCase(getAllMovies.fulfilled, (state, action) => {
      state.movies = action.payload.docs
    })
  }
})

export default moviesSlice.reducer;