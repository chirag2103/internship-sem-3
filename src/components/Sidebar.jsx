import React from 'react';
import '../css/Sidebar.css';
import Playlist from './Playlist.jsx';

function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li className="active">
          <a href="/playlists">Playlists</a>
          <Playlist />
        </li>
        <li>
          <a href="/albums">Albums</a>
        </li>
        <li>
          <a href="/artists">Artists</a>
        </li>
        <li>
          <a href="/genres">Genres</a>
        </li>
        <li>
          <a href="/topcharts">Top Charts</a>
        </li>
        <li>
          <a href="/new-release">New Releases</a>
        </li>
        <li>
          <a href="/discover">Discover</a>
        </li>
      </ul>
      <div className="sidebar-footer">
        <button>Logout</button>
      </div>
    </div>
  );
}

export default Sidebar;
