import React from "react";
import Track from "./Track";

function Tracklist(props) {
  return (
    <div>
      {props.tracks.map((track) => {
        return <Track track={track} onAdd={props.onAdd} key={track.id} />;
      })}
    </div>
  );
}

export default Tracklist;
