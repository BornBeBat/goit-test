import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://65afa59b2f26c3f2139b5b13.mockapi.io/users',
  params: {
    limit: 3,
  },
});

export const fetchUsers = createAsyncThunk(
  'fetchUsers',
  async (page = 1, thunkAPI) => {
    try {
      const response = await instance.get('/contacts', {
        params: { page: page },
      });
      if (response.data.length === 0) {
        return thunkAPI.rejectWithValue(`
Sorry, you've reached the end of the collection.`);
      }
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue('something wrong try again later');
    }
  }
);
