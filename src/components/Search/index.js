import React from "react";
import "./Search.css";

function Search({ searchValue, setSearchValue, loading }) {
  //event trae muchísimas propiedades.
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
        disabled={loading} //Se activa disabled cuando loading sea true.
      />
    </div>
  );
}

export { Search };
