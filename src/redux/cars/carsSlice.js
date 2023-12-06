import { createSlice } from '@reduxjs/toolkit';
import { getCarsThunk, getCarsThunkFiltered, getCarsThunkPopular } from './operations';

const initialState = {
  cars: null,
  carsPopular: null,
  carsFiltered: null,
  carsFavorite: null,
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {},
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
      })
      .addCase(getCarsThunkFiltered.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getCarsThunkFiltered.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(getCarsThunkFiltered.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.carsFiltered = action.payload;
      });
  },
});

export const carsReducer = carsSlice.reducer;
