import React from "react";

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
      <button onClick={onClick}>{nameCategory}</button>
    </div>
  );
}

export default AllCategoriesButtons;
