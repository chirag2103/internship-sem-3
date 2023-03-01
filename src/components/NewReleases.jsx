import { useSelector } from 'react-redux';
import SongCard from './SongCard.jsx';
import { chartstrack as data } from '../data/chartstrack.js';

export default function NewReleases() {
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  return (
    <>
      <div className="SongsContainer">
        {data.tracks?.map((song, i) => {
          return (
            <SongCard
              key={song.key}
              song={song}
              i={i}
              data={data}
              isPlaying={isPlaying}
              activeSong={activeSong}
            />
          );
        })}
      </div>
    </>
  );
}
