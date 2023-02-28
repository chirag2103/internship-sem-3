import React from 'react';

const Track = ({ isPlaying, isActive, activeSong }) => (
  <div className="Track-Container">
    <div
      className={`${
        isPlaying && isActive ? 'Track-Animation' : ''
      } Track-Image-Box`}
    >
      <img
        src={activeSong?.images?.coverart}
        alt="cover art"
        className="Track-Image"
      />
    </div>
    <div style={{ width: '50%' }}>
      <p className="Track-Title">
        {activeSong?.title ? activeSong?.title : 'No active Song'}
      </p>
      <p className="Track-Subtitle">
        {activeSong?.subtitle ? activeSong?.subtitle : 'No active Song'}
      </p>
    </div>
  </div>
);

export default Track;
