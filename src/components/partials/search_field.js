import React from "react";
import { FaSearch } from "react-icons/fa";

const SearchField = () => {
  return (
    <div className="search-container">
      <div className="search">
        <input type="search" placeholder="What do you want to learn" />
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchField;
