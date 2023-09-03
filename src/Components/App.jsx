import { useState, useCallback } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "../Styles/App.module.css";
import Spotify from "./Util";

function App() {
  const [playlistTracks, setPlaylistTracks] = useState([]);
  const [searchResults, setSearchResults] = useState([]);

  const onAdd = (track) => {
    setPlaylistTracks((prevTracks) => [...prevTracks, track]);
  };

  const onRemove = (e) => {
    setPlaylistTracks((tracks) => tracks.filter((song) => song.id !== e.id));
  };

  const search = (term) => Spotify.search(term);
  const save = (name, uris) => Spotify.savePlaylist(name, uris);

  const componentDidMount = () => {
    window.addEventListener("load", () => {
      Spotify.getAccessToken();
    });
  };

  componentDidMount();

  return (
    <div id={styles.app}>
      <header>
        <h1 id={styles.jammming}>Jammming</h1>
        <SearchBar search={search} setSearchResults={setSearchResults} />
      </header>
      <main>
        <section>
          <SearchResults
            searchResults={searchResults}
            setSearchResults={setSearchResults}
            onAdd={onAdd}
          />
        </section>
        <section>
          <Playlist
            setPlaylistTracks={setPlaylistTracks}
            playlistTracks={playlistTracks}
            name="playlist"
            onRemove={onRemove}
            onSave={save}
          />
        </section>
      </main>
    </div>
  );
}

export default App;
