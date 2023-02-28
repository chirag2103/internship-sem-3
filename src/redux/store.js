import { configureStore } from '@reduxjs/toolkit';

import { ShazamCoreApi } from './services/ShazamCoreApi.js';
import playerReducer from './features/playerSlice.js';
import playlistSlice from './features/playlistSlice.js';

export const store = configureStore({
  reducer: {
    [ShazamCoreApi.reducerPath]: ShazamCoreApi.reducer,
    player: playerReducer,
    playlist: playlistSlice,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(ShazamCoreApi.middleware),
});
