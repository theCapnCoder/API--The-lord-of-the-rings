import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../../../api/instance'

export const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  const response = await instance.get('/book');
  const data = await response.data;

  return data
})