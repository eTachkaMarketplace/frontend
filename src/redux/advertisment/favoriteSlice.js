import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  adverstisementsFavorite: [],
  isLoading: false,
  error: null,
};

export const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    setFavoriteAdvertisements: (state, action) => {
      state.adverstisementsFavorite = action.payload;
    },
    setLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setFavoriteAdvertisements, setLoading, setError } = favoriteSlice.actions;

export default favoriteSlice.reducer;
