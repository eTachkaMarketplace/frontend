import { createSlice } from '@reduxjs/toolkit';
import { changeUser, deleteUser, getUser } from './opetations';

const initialState = {
  user: {},
  isLoading: false,
  error: null,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(changeUser.fulfilled, (state, ) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(changeUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(changeUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(deleteUser.fulfilled, (state, ) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      });
  },
});

// export const { logout, refresh } = authSlice.actions;

