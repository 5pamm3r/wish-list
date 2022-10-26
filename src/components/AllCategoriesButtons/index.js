import React from "react";
import './AllCategoriesButtons.css'

function AllCategoriesButtons({
  nameCategory,
  setCategoryName,
  setCategoryColor,
  color,
}) {
  const onClick = (e) => {
    setCategoryName(e.target.innerText);
    setCategoryColor(color);
  };

  return (
    <div>
      <button className="Button__category" onClick={onClick}>{nameCategory}</button>
    </div>
  );
}

export default AllCategoriesButtons;
