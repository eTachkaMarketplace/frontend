import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';

import storage from 'redux-persist/lib/storage';

import { authSlice } from './auth/authSlice';
import { modalReducer } from './modal/modalSlice';
import { adversSlice } from './advertisment/adverSlice';
import { favoriteSlice } from './advertisment/favoriteSlice'; 

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token', 'refToken', 'user'],
};

const favoritePersistConfig = { 
  key: 'favorites',
  storage,
};

export const store = configureStore({
  reducer: {
    auth: persistReducer(authPersistConfig, authSlice.reducer),
    modal: modalReducer,
    adverstisement: adversSlice.reducer,
    favorites: persistReducer(favoritePersistConfig, favoriteSlice.reducer), 
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
