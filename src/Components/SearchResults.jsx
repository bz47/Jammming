import React from "react";
import styles from "../Styles/SearchResults.module.css";
import Tracklist from "./Tracklist";

function SearchResults() {
  return (
    <div id={styles.searchResults}>
      <h3>Results</h3>
      <Tracklist />
    </div>
  );
}

export default SearchResults;
