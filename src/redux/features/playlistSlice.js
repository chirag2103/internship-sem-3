import { createSlice } from '@reduxjs/toolkit';

const playlistSlice = createSlice({
  name: 'playlist',
  initialState: [],
  reducers: {
    addSong: (state, action) => {
      state.push(action.payload);
    },
    removeSong: (state, action) => {
      return state.filter((song) => song.id !== action.payload);
    },
    clearPlaylist: (state) => {
      return [];
    },
  },
});

export const { addSong, removeSong, clearPlaylist } = playlistSlice.actions;
export default playlistSlice.reducer;
