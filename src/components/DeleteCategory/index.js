import React from "react";
import "./DeleteCategory.css";

function DeleteCategory({
  state,
  setStateDelete,
  deleteCategory,
  deleteAllItemCategory,
}) {
  const onDelete = () => {
    deleteCategory();
    deleteAllItemCategory();
  };
  return (
    <div className="Delete__container">
      <p className="Delete__title">Delete category?</p>
      <p className="Delete__subtitle">Including all tasks.</p>
      <div className="DeleteCategoryButton__container">
        <button onClick={onDelete} className="DeleteCategory__button">
          Delete
        </button>
      </div>
    </div>
  );
}

export default DeleteCategory;
