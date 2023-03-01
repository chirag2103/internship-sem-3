import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { useGetSongsBySearchQuery } from '../redux/services/ShazamCoreApi';
import axios from 'axios';
import SongCard from './SongCard';
export default function SearchPage() {
  const { term } = useParams();
  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://shazam.p.rapidapi.com/search',
      params: { term: `${term}`, limit: 20 },
      headers: {
        'X-RapidAPI-Key': '4efc023aefmsha3ec6904cd068c4p183f55jsn70e8bec70b83',
        'X-RapidAPI-Host': 'shazam.p.rapidapi.com',
      },
    };
    await axios
      .request(options)
      .then((res) => {
        setData(res.data?.tracks?.hits.map((song) => song.track));
      })
      .catch((error) => {
        console.error(error);
      });
  };
  console.log(term);
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <h2 style={{ paddingBottom: '1rem' }}>Searched Result for {term}</h2>
        <div className="SongsContainer">
          {data.map((song, i) => {
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
      </div>
    </>
  );
}
