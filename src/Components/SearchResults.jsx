import React from "react";
import styles from "../Styles/SearchResults.module.css";
import Tracklist from "./Tracklist";

function SearchResults(props) {
  return (
    <div id={styles.searchResults}>
      <h3>Results</h3>
      <Tracklist tracks={props.searchResults} onAdd={props.onAdd} />
    </div>
  );
}

export default SearchResults;
