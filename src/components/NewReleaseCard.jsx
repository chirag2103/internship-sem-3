import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { playPause, setActiveSong } from '../redux/features/playerSlice.js';
import { addSong } from '../redux/features/playlistSlice.js';
import PlayPause from './PlayPause.jsx';

export default function NewReleaseCard({
  isPlaying,
  activeSong,
  song,
  i,
  data,
}) {
  const dispatch = useDispatch();
  const handlePauseClick = () => {
    dispatch(PlayPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, data, i }));
    dispatch(playPause(true));
  };

  const handlePlaylist = () => {
    dispatch(addSong(song));
  };
  return (
    <>
      <div className="SingleSongContainer">
        <div className="SongPlayPause">
          <PlayPause
            song={song}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
            isPlaying={isPlaying}
            activeSong={activeSong}
          />
        </div>
        <img src={song?.artworkUrl100} alt="song_img" />
        <p>{song.collectionName}</p>
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
        <p>
          <button onClick={handlePlaylist}>Add to PlayList</button>
        </p>
      </div>
    </>
  );
}
