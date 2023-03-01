import React from 'react';
import { useSelector } from 'react-redux';
// import { removeSong, clearPlaylist } from '../redux/features/playlistSlice.js';
import SongCard from './SongCard.jsx';

export default function Playlist() {
  const playlist = useSelector((state) => state.playlist);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  // const handleRemoveSong = (id) => {
  //   dispatch(removeSong(id));
  // };

  // const handleClearPlaylist = () => {
  //   dispatch(clearPlaylist());
  // };

  return (
    <>
      {playlist.map((song, data, i) => {
        return (
          <SongCard
            key={i}
            song={song}
            i={i}
            data={data}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        );
      })}
    </>
  );
}
