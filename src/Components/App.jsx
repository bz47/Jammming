import { useState } from "react";
import SearchBar from "./SearchBar";
import SearchResults from "./SearchResults";
import Playlist from "./Playlist";
import styles from "../Styles/App.module.css";

function App() {
  return (
    <div id={styles.app}>
      <header>
        <h1>Spotify Playlist App</h1>
      </header>
      <SearchBar />
      <main>
        <SearchResults />
        <Playlist />
      </main>
    </div>
  );
}

export default App;
