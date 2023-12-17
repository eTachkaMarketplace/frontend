import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  car: [],
  isOpen: false,
  isLoading: false,
  error: null,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    setIsOpen: (state, action) => {
      state.isOpen = action.payload;
    },
  }
});

export const { setIsOpen } = modalSlice.actions;

export const selectIsOpen = state => state.modal.isOpen;
export const selectModalCar = state => state.modal.car;

export const modalReducer = modalSlice.reducer;
