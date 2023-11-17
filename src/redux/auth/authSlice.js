import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  register,
  logoutOperation,
  // logout,
  // refresh,
  // updateUser,
  } from './operations';

const initialState = {
  user: {},
  refToken: '',
  token: '',
  isLoggedIn: false,
  isLoading: false,
  error: null,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.token = '';
      state.refToken = '';
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.token = payload.token;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload.error;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.jwtAccessToken;
        state.refToken = payload.jwtRefreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.error = payload;
      })
      .addCase(logoutOperation.fulfilled, state => {
        state.isLoggedIn = false;
        state.token = '';
        state.refToken = '';
      });
  },
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;

//   .addCase(refresh.fulfilled, (state, { payload }) => {
//     state.isLoggedIn = true;
//     state.isLoading = false;
//     state.user = payload;
//   })
//   .addCase(refresh.pending, state => {
//     state.isLoading = true;
//   })
//   .addCase(refresh.rejected, (state, { payload }) => {
//     state.isLoading = false;
//     state.isLoggedIn = false;
//     state.error = payload;
//     state.token = null;
//   })
//   .addCase(updateUser.fulfilled, (state, { payload }) => {
//     state.user = payload;
//     state.isLoading = false;
//   })
//   .addCase(updateUser.pending, state => {
//     state.isLoading = true;
//     state.error = null;
//   })
//   .addCase(updateUser.rejected, (state, { payload }) => {
//     state.isLoading = false;
//     state.error = payload;
//   })