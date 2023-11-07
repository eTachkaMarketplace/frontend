import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk, getCarsThunkPopular } from './operations';

const initialState = {
  cars: null,
  carsPopular: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {}, // Визначте додаткові обробники тут, якщо потрібно

  extraReducers: builder => {
    builder
      .addCase(getCarsThunk.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunk.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.cars = action.payload;
      })
      .addCase(getCarsThunkPopular.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunkPopular.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarsThunkPopular.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carsPopular = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
