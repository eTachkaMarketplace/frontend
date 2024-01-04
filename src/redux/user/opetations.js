import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { instance } from 'redux/auth/operations';

export const getUser = createAsyncThunk(
  'api/user/getUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get('api/users/user');
      console.log('getUser is successful');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeUser = createAsyncThunk(
  'user/changeUser',
  async (credentials, { rejectWithValue }) => {
    try {
      await instance.put('api/users/user', credentials);
      console.log(`User changed successfully`);
      return;
    } catch (error) {
      console.log(`Change failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async ({ id }, { rejectWithValue }) => {
    try {
      await instance.delete(`api/users/${id}`);
      console.log(`User delete successfully`);
      return;
    } catch (error) {
      console.log(`failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);


export const forgotPass = createAsyncThunk(
  'user/forgotPass',
  async (credentials, { rejectWithValue }) => {
    try {
      await instance.put('api/users/forgot/password', credentials);
      console.log(`Check your email`);
      return;
    } catch (error) {
      console.log(`Oops. Try again`);
      return rejectWithValue(error.message);
    }
  }
);

export const changePass = createAsyncThunk(
  'user/changePass',
  async (credentials, { rejectWithValue }) => {
    try {
      await instance.put('api/users/change/password', credentials);
      console.log(`Password changed successfully`);
      return;
    } catch (error) {
      console.log(`Change failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);
export const acceptCode = createAsyncThunk(
  'user/acceptCode',
  async ({code}, { rejectWithValue }) => {
    try {
      await instance.put(`api/users/accept/code/${code}`, );
      console.log("code accepted")
      return;
    } catch (error) {
      console.log(`Code failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);
