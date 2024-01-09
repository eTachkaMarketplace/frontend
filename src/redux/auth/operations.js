import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const instance = axios.create({
  baseURL: process.env['BACKEND_URL'] || "https://api.etachka-marketplace.space/",
});


export const setToken = token => {
  instance.defaults.headers['Authorization'] = `Bearer ${token}`;
};

export const clearToken = () => {
  instance.defaults.headers['Authorization'] = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post('api/auth/signup', credentials);
      console.log(`Welcome!!!`);
      return response.data;

    } catch (error) {
      console.log(`This email is already in use`);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await instance.post('api/auth/login', credentials);
      setToken(response.data.data.jwtAccessToken);
      console.log(response);
      console.log(`Welcome back!!!`);
      return response.data;
    } catch (error) {
      console.log(`Login failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);

export const logoutOperation = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      clearToken();
      return true;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);


// export const logout = createAsyncThunk(
//   'auth/logout',
//   async (_, { rejectWithValue }) => {
//     try {
//       await instance.post('auth/logout');
//       clearToken();
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const refresh = createAsyncThunk(
//   'auth/refresh/fetchCurrentUser',
//   async (_, { getState, rejectWithValue }) => {
//     const { token } = getState().auth;
//     if (!token) {
//       return rejectWithValue('Oooops... Cannot refresh user');
//     }
//     try {
//       setToken(token);
//       const { data } = await instance.get('api/auth/current');
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateUser = createAsyncThunk(
//   'auth/update',
//   async (credentials, { rejectWithValue }) => {
//     try {
//       const { data } = await instance.patch('api/auth/update', credentials);
//       console.log(`Your profile has been updated`);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
