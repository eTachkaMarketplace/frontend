import { createSlice } from '@reduxjs/toolkit';
import {
  createFavoriteAdverstisementsByID,
  deleteAdverstisementsByID,
  deleteFavoriteAdverstisementsByID,
  getAdverstisements,
  getAdverstisementsByID,
  getAdverstisementsFavorite,
  postFavoriteAdverstisementsByID,
  putFavoriteAdverstisementsByID,
} from './operations';

const initialState = {
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
        state.adverstisements = payload;
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
      .addCase(getAdverstisementsFavorite.fulfilled, (state, { payload }) => {
        state.adverstisementsFavorite = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(getAdverstisementsFavorite.pending, state => {
        state.isLoading = true;
      })
      .addCase(getAdverstisementsFavorite.rejected, (state, { payload }) => {
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
      .addCase(deleteFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(deleteFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        deleteFavoriteAdverstisementsByID.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.error;
        }
      )
      .addCase(postFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(postFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        postFavoriteAdverstisementsByID.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.error;
        }
      )
      .addCase(putFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(putFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        putFavoriteAdverstisementsByID.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.error;
        }
      )
      .addCase(createFavoriteAdverstisementsByID.fulfilled, state => {
        state.isLoading = false;
        state.error = null;
      })
      .addCase(createFavoriteAdverstisementsByID.pending, state => {
        state.isLoading = true;
      })
      .addCase(
        createFavoriteAdverstisementsByID.rejected,
        (state, { payload }) => {
          state.isLoading = false;
          state.error = payload.error;
        }
      );
  },
});
