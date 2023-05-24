import { createAsyncThunk} from '@reduxjs/toolkit'

const _apiBaseUrl = 'https://the-one-api.dev/v2'

export const getAllBooks = createAsyncThunk('books/getAllBooks', async () => {
  const response = await fetch(`${_apiBaseUrl}/book`);
  const data = await response.json();
  return data
})