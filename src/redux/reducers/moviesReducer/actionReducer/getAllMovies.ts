import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../../../api/instance'

export const getAllMovies = createAsyncThunk(
  'movies/getAllMovies', async () => {
    const response = await instance.get('/movie');
    const data = await response.data;

    return data;
  }
)