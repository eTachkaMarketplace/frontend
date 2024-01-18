import { createAsyncThunk } from '@reduxjs/toolkit';
// import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { instance } from 'redux/auth/operations';

export const getAdverstisements = createAsyncThunk(
  'adverstisement/getAdverstisements',
  async ({ page = 0, size = 10, filter = {}, sort = "unsorted" }, { rejectWithValue }) => {
    try {
      const encodedFilter = encodeURI(JSON.stringify(filter));
      console.log(encodedFilter);
      const response = await instance.get(
        `advertisement/search?page=${page}&size=${size}&filter=${encodedFilter}&sort=${sort}`
      );
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
      const response = await instance.get(`advertisement/${id}`);
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
      const response = await instance.get(`advertisement/favorites`);
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
      const response = await instance.delete(`advertisement/${id}`);
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
        `advertisement/favorite/${id}`
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
        `advertisement/favorite/${id}`
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
        `advertisement/favorite/${id}`,
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
        `advertisement`,
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
