import React from "react";
import styles from "../Styles/Playlist.module.css";

function Playlist() {
  return (
    <div id={styles.playlist}>
      <h3>Playlist</h3>
      <input type="text" />
      <button>Save to Spotify</button>
    </div>
  );
}

export default Playlist;
