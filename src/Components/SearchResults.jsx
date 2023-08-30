import React from "react";
import styles from "../Styles/SearchResults.module.css";
import Tracklist from "./Tracklist";

function SearchResults(props) {
  return (
    <div id={styles.searchResults}>
      <h2>Search Results</h2>
      <Tracklist
        tracks={props.searchResults}
        onAdd={props.onAdd}
        onRemove={props.onRemove}
        string="search"
      />
    </div>
  );
}

export default SearchResults;
