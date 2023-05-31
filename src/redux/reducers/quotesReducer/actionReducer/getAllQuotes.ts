import { createAsyncThunk } from '@reduxjs/toolkit'
import instance from '../../../../api/instance'
import { generateURLParams } from '../../../../helpers'

export enum Pagination {
  limit = 'limit',
  page = 'page',
  offset = 'offset'
}

export const getAllQuotes = createAsyncThunk(
  'quotes/getAllQuotes',
  async (typePagination: Pagination) => {
    console.log('enter')
    const offset = undefined;
    const limit = undefined;
    const page = undefined;

    console.log(limit)
    const params = generateURLParams({ offset, limit, page });
    console.log(params)

    const response = await instance.get(`/quote?${params}`)
    const data = response.data

    return data;
  }
)