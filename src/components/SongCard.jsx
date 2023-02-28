import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../css/SongCard.css';
import PlayPause from './PlayPause.jsx';
import { playPause, setActiveSong } from '../redux/features/playerSlice.js';
export default function SongCard({ song, data, i, activeSong, isPlaying }) {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };
  return (
    <>
      <div className="SingleSongContainer">
        <PlayPause
          song={song}
          handlePause={handlePauseClick}
          handlePlay={handlePlayClick}
          isPlaying={isPlaying}
          activeSong={activeSong}
        />
        <img src={song.images?.coverart} alt="song_img" />
        <p>
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p>
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : `/top-artists`
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </>
  );
}
