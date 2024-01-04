import { createSlice } from '@reduxjs/toolkit';
import { acceptCode, changePass, changeUser, deleteUser, forgotPass, getUser } from './opetations';

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
        state.user = {...payload};
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
      .addCase(changeUser.fulfilled, state => {
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
      .addCase(deleteUser.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(forgotPass.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(forgotPass.pending, state => {
        state.isLoading = true;
      })
      .addCase(forgotPass.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(changePass.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(changePass.pending, state => {
        state.isLoading = true;
      })
      .addCase(changePass.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(acceptCode.fulfilled, (state, { payload }) => {
        state.user = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(acceptCode.pending, state => {
        state.isLoading = true;
      })
      .addCase(acceptCode.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      });
  },
});

// export const { logout, refresh } = authSlice.actions;

