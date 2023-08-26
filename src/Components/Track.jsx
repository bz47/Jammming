import React, { useCallback } from "react";
import styles from "../Styles/Track.module.css";

function Track(props) {
  const string = props.string;

  const choice = () => {
    switch (string) {
      case "search": {
        return (
          <button
            style={{ width: "fit-content", padding: ".7em" }}
            onClick={() => props.onAdd(props.track)}
          >
            +
          </button>
        );
      }
      case "playlist": {
        return (
          <button
            style={{ width: "fit-content", padding: ".7em" }}
            onClick={() => props.onRemove(props.track)}
          >
            -
          </button>
        );
      }
      default: {
        return undefined;
      }
    }
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
