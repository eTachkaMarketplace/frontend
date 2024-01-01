import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  register,
  logoutOperation,
  setToken,
  } from './operations';

const initialState = {
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
    refresh: state => {
      if (state.token) state.isLoggedIn = true;
      setToken(state.token);
    },
  },
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, (state, { payload }) => {
        state.isLoggedIn = false;
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
        state.token = payload.data.jwtAccessToken;
        state.refToken = payload.data.jwtRefreshToken;
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

export const { logout, refresh } = authSlice.actions;


