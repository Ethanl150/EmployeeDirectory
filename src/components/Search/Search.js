import React from "react";
import "./Search.css";

function Search(props) {
  return (
    <input
      className="mt-4"
      type="text"
      id="search-bar"
      name="search"
      placeholder="Search first name..."
      value={props.search}
      onChange={props.inputChange}
    />
  );
}

export default Search;
