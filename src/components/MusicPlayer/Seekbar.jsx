import React from 'react';

const Seekbar = ({ value, min, max, onInput, setSeekTime, appTime }) => {
  // converts the time to format 0:00
  const getTime = (time) =>
    `${Math.floor(time / 60)}:${`0${Math.floor(time % 60)}`.slice(-2)}`;

  return (
    <div className="SeekBar-Container">
      <button
        type="button"
        onClick={() => setSeekTime(appTime - 5)}
        className="SeekBar-Button Minus"
      >
        -
      </button>
      <p style={{ color: 'white' }}>{value === 0 ? '0:00' : getTime(value)}</p>
      <input
        type="range"
        step="any"
        value={value}
        min={min}
        max={max}
        onInput={onInput}
        className="SeekBar-Skip"
      />
      <p className="text-white">{max === 0 ? '0:00' : getTime(max)}</p>
      <button
        type="button"
        onClick={() => setSeekTime(appTime + 5)}
        className="SeekBar-Button Plus"
      >
        +
      </button>
    </div>
  );
};

export default Seekbar;
