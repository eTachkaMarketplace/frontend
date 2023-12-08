import { createSlice } from '@reduxjs/toolkit';
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { instance } from '../cars/operations';

// export const getCarByIdforModal = createAsyncThunk(
//   'modal/getCarByIdforModal',
//   async ({ id }, { rejectWithValue }) => {
//     try {
//       const url = `/api/adverts/adverts?id=${id}`;
//       const responce = await instance.get(url);
//       return responce.data[0];
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

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



//   extraReducers: builder =>
//     builder
//       .addCase(getCarByIdforModal.pending, state => {
//         state.isLoading = true;
//         state.error = null;
//         state.car = [];
//       })
//       .addCase(getCarByIdforModal.rejected, (state, action) => {
//         state.isLoading = false;
//         state.error = action.payload;
//       })
//       .addCase(getCarByIdforModal.fulfilled, (state, { payload }) => {
//         state.isLoading = false;
//         state.error = null;
//         state.car = [payload];
//       }),