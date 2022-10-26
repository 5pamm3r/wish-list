import React from "react";
import "./Search.css";

function Search({ searchValue, setSearchValue, loading }) {
  const onSearchValueChange = (event) => {
    setSearchValue(event.target.value);
  };

  return (
    <div className="Search_container">
      <input
        className="Search"
        placeholder="Search..."
        onChange={onSearchValueChange}
        value={searchValue}
        disabled={loading} 
      />
    </div>
  );
}

export { Search };
