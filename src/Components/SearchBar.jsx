import React, { useState } from "react";
import styles from "../Styles/SearchBar.module.css";

function SearchBar({ setSearchResults }) {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div id="searchBar">
      <input
        className={styles.searchBar}
        type="text"
        placeholder="Find a Song..."
        onChange={handleChange}
      />
      <button type="submit" className={styles.searchButton}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
