import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeSong, clearPlaylist } from '../redux/features/playlistSlice.js';
import SongCard from './SongCard.jsx';

export default function Playlist() {
  const dispatch = useDispatch();
  const playlist = useSelector((state) => state.playlist);
  const [songName, setSongName] = useState('');
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const handleRemoveSong = (id) => {
    dispatch(removeSong(id));
  };

  const handleClearPlaylist = () => {
    dispatch(clearPlaylist());
  };

  return (
    <>
      {playlist.map((song, i) => {
        return (
          <SongCard
            key={i}
            song={song}
            i={i}
            data={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        );
      })}
    </>
  );
}
