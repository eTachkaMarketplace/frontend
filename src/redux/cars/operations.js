import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://65438b8101b5e279de208dab.mockapi.io',
});

export const getCarsThunk = createAsyncThunk(
  'cars/getCarsThunk',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const url = `/api/adverts/adverts?limit=${limit}&page=${page}`;

      const response = await instance.get(url);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getCarsThunkPopular = createAsyncThunk(
  'cars/getCarsThunkPopular',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const url = `/api/adverts/adverts?limit=${limit}&page=${page}`;

      const response = await instance.get(url);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
