import React from "react";
import Track from "./Track";

function Tracklist(props) {
  const generateKey = () => {
    let num = "";
    let characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const chars = characters.length;

    for (let i = 0; i < 5; i++) {
      num += characters.charAt(Math.floor(Math.random() * chars));
    }

    return num;
  };

  return (
    <div>
      {props.tracks.map((track) => {
        return (
          <Track
            key={generateKey()}
            track={track}
            onAdd={props.onAdd}
            onRemove={props.onRemove}
            string={props.string}
          />
        );
      })}
    </div>
  );
}

export default Tracklist;
