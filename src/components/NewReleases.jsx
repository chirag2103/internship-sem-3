import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import NewReleaseCard from './NewReleaseCard';

export default function NewReleases() {
  const [data, setData] = useState([]);
  const { activeSong, isPlaying } = useSelector((state) => state.player);

  const fetchData = async () => {
    const options = {
      method: 'GET',
      url: 'https://itunes.apple.com/search?term=new&media=music&entity=song&limit=20',
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
      {data?.results?.map((song, i) => {
        return (
          <NewReleaseCard
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
