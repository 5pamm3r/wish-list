import React from "react";
import './DeleteCategory.css'

function DeleteCategory({ state,setStateDelete, deleteCategory, deleteAllItemCategory }) {
  const onDelete = () => {
    deleteCategory()
    deleteAllItemCategory()
  };
  return (
    <div className="Delete__container">
      <p className="Delete__title">
        ¿Eliminar categoría? 
      </p>
      <p className="Delete__subtitle">
        Perderás las tareas asignadas.
      </p>
      <div className="DeleteCategoryButton__container">
        <button onClick={onDelete} className="DeleteCategory__button">
          Eliminar
        </button>
      </div>
    </div>
  );
}

export default DeleteCategory;
