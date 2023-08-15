import React from "react";
import styles from "../Styles/Track.module.css";

function Track() {
  return (
    <div id={styles.track}>
      <div id="track-info">
        <h4>Track Name</h4>
        <p> Artist | Song</p>
      </div>
    </div>
  );
}

export default Track;
