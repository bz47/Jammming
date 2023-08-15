import React, { useCallback } from "react";
import styles from "../Styles/Track.module.css";

function Track(props) {
  const choice = () => {
    return <button onClick={props.onAdd}>+</button>;
  };

  return (
    <div id={styles.track}>
      <div id={styles.track_info}>
        <h4>{props.track.song}</h4>
        <p>
          {props.track.artist} | {props.track.album}
        </p>
      </div>
      {choice()}
    </div>
  );
}

export default Track;
