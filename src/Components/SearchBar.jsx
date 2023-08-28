import React, { useState } from "react";
import styles from "../Styles/SearchBar.module.css";

let uriArray = [];

function SearchBar({ search, setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const findResults = () => {
    if (searchTerm !== "") {
      search(searchTerm).then((response) => setSearchResults(response));
    }
  };

  return (
    <div id="searchBar">
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Find a Song..."
        onChange={handleChange}
      />
      <button onClick={findResults} className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
