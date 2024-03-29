import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// import { Notify } from 'notiflix/build/notiflix-notify-aio';


export const instance = axios.create({
  baseURL: 'https://api.etachka-marketplace.me',
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
      const response = await instance.post('auth/signup', credentials);
      console.log(`Welcome!!!`);
      return response.data;

    } catch (error) {
      console.log(`This email is already in use`);
      return rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk('auth/login', async ({ credentials, showChecked }, { rejectWithValue }) => {
  try {
    const response = await instance.post(`auth/login?rememberMe=${showChecked}`, credentials);
    setToken(response.data.data.jwtAccessToken);
    console.log(response);
    console.log(`Welcome back!!!`);
    localStorage.setItem('isLoggedIn', true);
    return response.data;
  } catch (error) {
    console.log(`Login failed. Try again`);
    return rejectWithValue(error.message);
  }
});

export const refreshToken = createAsyncThunk(
  'auth/refreshToken',
  async ( credentials , { rejectWithValue }) => {
    try {
      const response = await instance.post(`auth/refresh/refresh-token`, credentials);
      setToken(response.data.data.jwtAccessToken);
      console.log('refreshToken', response);
      return response.data;
    } catch (error) {
      console.log(`Refresh failed. Try again`);
      return rejectWithValue(error.message);
    }
  }
);



export const getUser = createAsyncThunk('api/user/getUser', async (_, { rejectWithValue }) => {
  try {
    const response = await instance.get('user/me');
    console.log('getUser is successful');
    return response.data;
  } catch (error) {
    return rejectWithValue(error.message);
  }
});

export const changeUser = createAsyncThunk('user/changeUser', async (credentials, { rejectWithValue }) => {
  try {
    await instance.put('user/me', credentials);
    console.log(`User changed successfully`);
    return;
  } catch (error) {
    console.log(`Change failed. Try again`);
    return rejectWithValue(error.message);
  }
});


export const changeUserPhoto = createAsyncThunk('user/changeUserPhoto', async (credentials, { rejectWithValue }) => {
  try {
    await instance.put('user/me/photo', credentials);
    console.log(`User changed successfully`);
    return;
  } catch (error) {
    console.log(`Change failed. Try again`);
    return rejectWithValue(error.message);
  }
});

export const deleteUser = createAsyncThunk('user/deleteUser', async (_, { rejectWithValue }) => {
  try {
    await instance.delete(`user/me`);
    console.log(`User delete successfully`);
    return;
  } catch (error) {
    console.log(`failed. Try again`);
    return rejectWithValue(error.message);
  }
});

export const forgotPass = createAsyncThunk('user/forgotPass', async (credentials, { rejectWithValue }) => {
  try {
    await instance.put('user/password/forgot', credentials);
    console.log(`Check your email`);
    return;
  } catch (error) {
    console.log(`Oops. Try again`);
    return rejectWithValue(error.message);
  }
});

export const changePass = createAsyncThunk('user/changePass', async (credentials, { rejectWithValue }) => {
  try {
    await instance.put('user/password', credentials);
    console.log(`Password changed successfully`);
    return;
  } catch (error) {
    console.log(`Change failed. Try again`);
    return rejectWithValue(error.message);
  }
});
export const acceptCode = createAsyncThunk('user/acceptCode', async ({ code }, { rejectWithValue }) => {
  try {
    const codeApi = `user/accept/code/${code}`;
    console.log(codeApi);
    const response = await instance.put(codeApi);
    console.log(codeApi);
    console.log('code accepted');
    return response.data;
  } catch (error) {
    console.log(`Code failed. Try again`);
    return rejectWithValue(error.message);
  }
});

export const activateCode = createAsyncThunk('user/activateCode', async ({ code }, { rejectWithValue }) => {
  try {
    const codeApi = `auth/activate/${code}`;
    const response = await instance.post(codeApi);
    console.log('code accepted');
    return response.data;
  } catch (error) {
    console.log(`Code failed. Try again`);
    return rejectWithValue(error.message);
  }
});



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
