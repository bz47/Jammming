import React, { useState } from "react";
import styles from "../Styles/Playlist.module.css";
import Tracklist from "./Tracklist";

let toBeSaved = [];

function Playlist(props) {
  const save = props.onSave;
  const { playlistTracks } = props;
  const [name, setName] = useState("Playlist");

  const nameList = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const log = () => {
    for (const track of playlistTracks) {
      toBeSaved.push(track.uri);
    }

    save(name, toBeSaved);

    props.setPlaylistTracks([]);
    setName("Playlist");
    console.log(toBeSaved);
  };

  return (
    <div id={styles.playlist}>
      <h3>{name == "" ? "Playlist" : name}</h3>
      <form action="">
        <input
          onChange={nameList}
          placeholder="Rename Playlist..."
          type="text"
          id="playlistName"
        />
      </form>
      <Tracklist
        tracks={playlistTracks}
        string="playlist"
        onRemove={props.onRemove}
      />
      <button onClick={log}>Save to Spotify</button>
    </div>
  );
}

export default Playlist;

//props.onSave(name, playlistTracks.trackUris)
