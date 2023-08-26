import React, { useState } from "react";
import styles from "../Styles/SearchBar.module.css";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div id="searchBar">
      <input type="text" placeholder="Find a Song" onChange={handleChange} />
      <button type="submit">Search</button>
    </div>
  );
}

export default SearchBar;
