import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';

// const PlayPause = ({
//   isPlaying,
//   activeSong,
//   song,
//   handlePause,
//   handlePlay,
// }) => {
//   isPlaying && activeSong?.title === song.title ? (
//     <FaPauseCircle size={35} onClick={handlePause} />
//   ) : (
//     <FaPlayCircle size={35} onClick={handlePlay} />
//   );
// };
// export default PlayPause;

export default function PlayPause({
  isPlaying,
  activeSong,
  song,
  handlePause,
  handlePlay,
}) {
  return isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} onClick={handlePlay} />
  );
}
