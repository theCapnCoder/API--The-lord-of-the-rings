import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../../../api/instance'

export const getAllChapters = createAsyncThunk(
  'chapters/getAllChapters',
  async () => {
    const response = await instance.get('/chapter')
    const data = await response.data

    return data;
  }
)