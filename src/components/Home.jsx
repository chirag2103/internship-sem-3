import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useGetTopChartsTrackQuery } from '../redux/services/ShazamCoreApi.js';
import SongCard from './SongCard.jsx';
import { chartstrack as data } from '../data/chartstrack.js';
import '../css/Home.css';
export default function Home() {
  //   const { data, isFetching, error } = useGetTopChartsTrackQuery();
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  console.log(data.tracks);

  const dispatch = useDispatch();
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
