import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import TopChartsCard from './TopChartsCard';

export default function TopCharts() {
  const [data, setData] = useState([]);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://itunes.apple.com/in/rss/topsongs/limit=20/json',
    };
    await axios
      .request(options)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(data);
  return (
    <>
      {data?.feed?.entry.map((song, i) => {
        return (
          <TopChartsCard
            song={song}
            key={i}
            i={i}
            activeSong={activeSong}
            isPlaying={isPlaying}
            data={data.results}
          />
        );
      })}
    </>
  );
}
