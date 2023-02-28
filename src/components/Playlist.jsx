import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  addSong,
  removeSong,
  clearPlaylist,
} from '../redux/features/playlistSlice.js';

export default function Playlist() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const [songName, setSongName] = useState('');

  const handleAddSong = () => {
    dispatch(addSong({ id: Date.now(), name: songName }));
    setSongName('');
  };

  const handleRemoveSong = (id) => {
    dispatch(removeSong(id));
  };

  const handleClearPlaylist = () => {
    dispatch(clearPlaylist());
  };

  return (
    <div>
      {playlist.map((song) => (
        <li key={song.id}>{song.name}</li>
      ))}
    </div>
  );
}
