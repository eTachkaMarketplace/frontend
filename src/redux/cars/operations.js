import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const instance = axios.create({
  baseURL: 'https://65438b8101b5e279de208dab.mockapi.io',
});

export const getCarsThunkFiltered = createAsyncThunk(
  'cars/getCarsThunkFiltered',
  async (filters, { rejectWithValue }) => {
    try {
      let url = `/advertisement/search`;

      Object.keys(filters).forEach((key, index) => {
        if (filters[key] || filters[key] === 0) {
          if (index === 0) {
            url += `${key}=${filters[key]}`;
          } else {
            url += `&${key}=${filters[key]}`;
          }
        }
      });

      console.log(url);
      const response = await instance.get(url);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


export const getCarsThunk = createAsyncThunk(
  'cars/getCarsThunk',
  async ({ page, limit }, { rejectWithValue }) => {
    try {
      const url = `/advertisement/search?size=${limit}&page=${page}`;

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
      const url = `/advertisement/search?size=${limit}&page=${page}`;

      const response = await instance.get(url);

      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


