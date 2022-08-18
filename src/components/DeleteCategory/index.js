import React from "react";
import './DeleteCategory.css'

function DeleteCategory({ setStateDelete, deleteCategory, deleteAllItemCategory }) {
  const onDelete = () => {
    deleteCategory()
    deleteAllItemCategory()
  };
  const onCancel = () => {
    setStateDelete(prevState=>!prevState)
  };
  return (
    <div className="item__container">
      <p className="Delete__title">
        ¿Eliminar categoría? 
      </p>
      <p className="Delete__subtitle">
        Perderás las tareas asignadas.
      </p>
      <div className="DeleteCategoryButtons__container">
        <button onClick={onDelete} className="DeleteCategory__button">
          Eliminar
        </button>
        <button onClick={onCancel} className="CancelCategory__button">
          Cancelar
        </button>
      </div>
    </div>
  );
}

export default DeleteCategory;
