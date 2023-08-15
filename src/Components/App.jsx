import { useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "../Styles/App.module.css";

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([
    {
      song: "Go Baby",
      artist: "Lupe",
      album: "Food and Liqour",
      id: 1,
    },
  ]);
  const [searchResults, setSearchResults] = useState([
    {
      song: "Go Baby",
      artist: "Lupe",
      album: "Food and Liqour",
      id: 1,
    },
    {
      song: "Demon Days",
      artist: "Gorillaz",
      album: "Self titled",
      id: 2,
    },
  ]);

  const onAdd = (track) => {
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
    console.log(`track is ${track}`);
  };

  return (
    <div id={styles.app}>
      <header>
        <h1>Spotify Playlist App</h1>
      </header>
      <SearchBar />
      <main>
        <SearchResults searchResults={searchResults} onAdd={onAdd} />
        <Playlist playlistTracks={playlistTracks} />
      </main>
    </div>
  );
}

export default App;
