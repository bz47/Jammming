import React, { useState } from "react";
import styles from "../Styles/Playlist.module.css";
import Tracklist from "./Tracklist";

function Playlist(props) {
  const { playlistTracks } = props;
  const [name, setName] = useState("Playlist");

  const nameList = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  return (
    <div id={styles.playlist}>
      <h3>{name == "" ? "Playlist" : name}</h3>
      <input
        onChange={nameList}
        type="text"
        id="playlistName"
        placeholder="Rename Playlist..."
      />
      <Tracklist
        tracks={playlistTracks}
        string="playlist"
        onRemove={props.onRemove}
      />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
