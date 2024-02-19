import { createSlice } from '@reduxjs/toolkit';
import {
  login,
  register,
  setToken,
  getUser,
  changeUser,
  deleteUser,
  forgotPass,
  changePass,
  acceptCode,
  clearToken,
  activateCode,
} from './operations';
  

const initialState = {
  refToken: '',
  token: '',
  user: {},
  isLoggedIn: false,
  isLoading: false,
  error: null,
  errorLog: null,
  errorReg: null,
  succerReg: false,
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: state => {
      state.isLoggedIn = false;
      state.token = '';
      state.refToken = '';
      clearToken()
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
        state.succerReg = true;
      })
      .addCase(register.pending, state => {
        state.isLoading = true;
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.errorReg = payload;
        state.succerReg = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.token = payload.data.jwtAccessToken;
        state.refToken = payload.data.jwtRefreshToken;
        state.isLoggedIn = true;
        state.isLoading = false;
        state.errorLog = null;
      })
      .addCase(login.pending, state => {
        state.isLoading = true;
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.isLoggedIn = false;
        state.errorLog = payload;
      })
      .addCase(getUser.fulfilled, (state, { payload }) => {
        state.user = { ...payload };
        state.isLoading = false;
        state.isLoggedIn = true;
        state.error = null;
      })
      .addCase(getUser.pending, state => {
        state.isLoading = true;
      })
      .addCase(getUser.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        state.isLoggedIn = false;
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
        state.error = payload;
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
        state.error = payload;
      })
      .addCase(acceptCode.fulfilled, (state, { payload }) => {
        state.user = { ...payload.data };
        state.isLoading = false;
        state.error = null;
      })
      .addCase(acceptCode.pending, state => {
        state.isLoading = true;
      })
      .addCase(acceptCode.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      })
      .addCase(activateCode.fulfilled, (state,) => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(activateCode.pending, state => {
        state.isLoading = true;
      })
      .addCase(activateCode.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { logout, refresh } = authSlice.actions;


