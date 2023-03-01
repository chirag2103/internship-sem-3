import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/SongCard.css';
import PlayPause from './PlayPause.jsx';
import { playPause, setActiveSong } from '../redux/features/playerSlice.js';
import { addSong } from '../redux/features/playlistSlice.js';
export default function SongCard({ song, data, i, activeSong, isPlaying }) {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePlaylist = () => {
    dispatch(addSong(song, data, i));
    console.log(song);
  };
  return (
    <div className="SingleSongContainer">
      <div style={{ position: 'relative', width: '100%', height: '14rem' }}>
        <div className={`SingleSongContainer-box`}>
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img
          src={song.images?.coverart}
          alt="song_img"
          style={{ width: '100%', height: '100%', borderRadius: '0.5rem' }}
        />
      </div>

      <div
        className="mt-4 flex flex-col"
        style={{ marginTop: '1rem', display: 'flex', flexDirection: 'column' }}
      >
        <p className="Song-Title">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-sm truncate text-gray-300 mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
        <p>
          <button className="button" onClick={handlePlaylist}>
            Add to PlayList
          </button>
        </p>
      </div>
    </div>
  );
}
