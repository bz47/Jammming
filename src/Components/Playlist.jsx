import React from "react";
import styles from "../Styles/Playlist.module.css";
import Tracklist from "./Tracklist";

function Playlist(props) {
  console.log(props.playlistTracks);
  return (
    <div id={styles.playlist}>
      <h3>Playlist</h3>
      <input type="text" />
      <Tracklist tracks={props.playlistTracks} />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
