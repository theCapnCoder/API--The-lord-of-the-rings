import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../../../api/instance'

export enum Pagination {
  limit = 'limit',
  page = 'page',
  offset = 'offset'
}

export const getAllQuotes = createAsyncThunk(
  'quotes/getAllQuotes',
  async (typePagination: Pagination) => {
    const response = await instance.get(`/quote?${typePagination}=20`)
    const data = response.data

    return data;
  }
)