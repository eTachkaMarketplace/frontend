import { createAsyncThunk } from '@reduxjs/toolkit';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
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
      Notify.success(`User changed successfully`);
      return;
    } catch (error) {
      Notify.failure(`Change failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);

export const deleteUser = createAsyncThunk(
  'user/deleteUser',
  async ({ id }, { rejectWithValue }) => {
    try {
      await instance.delete(`api/users/${id}`);
      Notify.success(`User delete successfully`);
      return;
    } catch (error) {
      Notify.failure(`failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);
