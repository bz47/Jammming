import { useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "../Styles/App.module.css";
import Spotify from "./Util";

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

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([
    {
      song: "Go Baby",
      artist: "Lupe",
      album: "Food and Liqour",
      id: generateKey(),
    },
    {
      song: "Demon Days",
      artist: "Gorillaz",
      album: "Self titled",
      id: generateKey(),
    },
  ]);

  const onAdd = (track) => {
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const onRemove = (e) => {
    setPlaylistTracks((tracks) => tracks.filter((song) => song.id !== e.id));
  };

  const search = (term) => Spotify.search(term);

  return (
    <div id={styles.app}>
      <header>
        <h1>Spotify Playlist App</h1>
        <SearchBar search={search} setSearchResults={setSearchResults} />
      </header>
      <main>
        <section>
          <SearchResults searchResults={searchResults} onAdd={onAdd} />
        </section>
        <section>
          <Playlist
            playlistTracks={playlistTracks}
            name="playlist"
            onRemove={onRemove}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
