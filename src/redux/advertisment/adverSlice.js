import { createSlice } from '@reduxjs/toolkit';
import {
  createFavoriteAdverstisementsByID,
  deleteAdverstisementsByID,
  deleteFavoriteAdverstisementsByID,
  disableById,
  enableById,
  getAdverstisements,
  getAdverstisementsByID,

  getAdvFav,

  // getAdverstisementsFavorite,
  getMyAdv,

  postFavoriteAdverstisementsByID,
  putFavoriteAdverstisementsByID,
} from './operations';

// import { favoriteSlice } from './favoriteSlice';
// const { setFavoriteAdvertisements, setLoading: setLoadingFavorite, setError: setErrorFavorite } = favoriteSlice.actions;


const initialState = {
  myAdvertisements: [],
  numberAdv:0,
  adverstisements: [],
  adverstisementsID: null,
  adverstisementsFavorite: [],
  isLoading: false,
  error: null,
};

export const adversSlice = createSlice({
  name: 'adverstisement',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(getAdverstisements.fulfilled, (state, { payload }) => {
        state.numberAdv = payload.message;
        state.adverstisements = payload.data;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAdverstisements.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverstisements.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(getAdverstisementsByID.fulfilled, (state, { payload }) => {
        state.adverstisementsID = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverstisementsByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })

      // .addCase(getAdverstisementsFavorite.fulfilled, (state, { payload }) => {
      //   setFavoriteAdvertisements(state, payload);
      //   setLoadingFavorite(state, false);
      //   setErrorFavorite(state, null);
      // })
      // .addCase(getAdverstisementsFavorite.pending, state => {
      //   setLoadingFavorite(state, true);
      // })
      // .addCase(getAdverstisementsFavorite.rejected, (state, { payload }) => {
      //   setLoadingFavorite(state, false);
      //   setErrorFavorite(state, payload.error);

      .addCase(getAdvFav.fulfilled, (state, { payload }) => {
        state.adverstisementsFavorite = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAdvFav.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdvFav.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;

      })
      .addCase(getMyAdv.fulfilled, (state, { payload }) => {
        state.myAdvertisements = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getMyAdv.pending, state => {
        state.isLoading = true;
      })
      .addCase(getMyAdv.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(deleteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteAdverstisementsByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(enableById.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(enableById.pending, state => {
        state.isLoading = true;
      })
      .addCase(enableById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(disableById.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(disableById.pending, state => {
        state.isLoading = true;
      })
      .addCase(disableById.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(deleteFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteFavoriteAdverstisementsByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(postFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(postFavoriteAdverstisementsByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(putFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(putFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(putFavoriteAdverstisementsByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      })
      .addCase(createFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(createFavoriteAdverstisementsByID.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload.error;
      });
  },
});
