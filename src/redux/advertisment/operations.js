import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { instance } from 'redux/auth/operations';

export const getAdverstisements = createAsyncThunk(
  'adverstisements/getAdverstisements',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get('api/advertisements?sortByDate=true');
      console.log('getAdverstisements is successful');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAdverstisementsByID = createAsyncThunk(
  'adverstisements/getAdverstisementsByID',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await instance.get(`advertisements/${id}`);
      console.log('getAdverstisementsByID is successful');
      return response.data.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getAdverstisementsFavorite = createAsyncThunk(
  'adverstisements/getAdverstisementsFavorite',
  async (_, { rejectWithValue }) => {
    try {
      const response = await instance.get(`api/advertisements/favorites`);
      console.log('getAdverstisementsFavorite is successful');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteAdverstisementsByID = createAsyncThunk(
  'adverstisements/deleteAdverstisementsByID',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await instance.delete(`api/advertisements/${id}/remove`);
      console.log('deleteAdverstisementsByID is successful');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteFavoriteAdverstisementsByID = createAsyncThunk(
  'adverstisements/deleteFavoriteAdverstisementsByID',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await instance.delete(
        `api/advertisements/${id}/favorites`
      );
      console.log('deleteFavoriteAdverstisementsByID is successful');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const postFavoriteAdverstisementsByID = createAsyncThunk(
  'adverstisements/postFavoriteAdverstisementsByID',
  async ({ id }, { rejectWithValue }) => {
    try {
      const response = await instance.post(
        `api/advertisements/${id}/favorites`
      );
      console.log('postFavoriteAdverstisementsByID is successful');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const putFavoriteAdverstisementsByID = createAsyncThunk(
  'adverstisements/putFavoriteAdverstisementsByID',
  async ({ Adverstisements, id }, { rejectWithValue }) => {
    try {
      const response = await instance.put(
        `api/advertisements/${id}/favorites`,
        Adverstisements
      );
      console.log('putFavoriteAdverstisementsByID is successful');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);



export const createFavoriteAdverstisementsByID = createAsyncThunk(
  'adverstisements/createFavoriteAdverstisementsByID',
  async ({formData, token}, { rejectWithValue }) => {
    console.log(formData);
    try {
      const response = await instance.post(
        `api/advertisements/create`,
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            'Authorization': `Bearer ${token}`,
          },
        }
      );

      console.log('createFavoriteAdverstisementsByID is successful');
      return response.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
// export const createFavoriteAdverstisementsByID = createAsyncThunk(
//   'adverstisements/createFavoriteAdverstisementsByID',
//   async (formData, { rejectWithValue }) => {
//     try {
//       const response = await instance.post(
//         `api/advertisements/create`,
//         formData
//       );
//       console.log('createFavoriteAdverstisementsByID is successful');
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
