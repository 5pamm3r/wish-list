import React, { Fragment, useState } from "react";
import "./FormItem.css";

function FormItem({
  item,
  add,
  setOpenItemModal,
  setSearchValue,
  category,
  render,
  newValue,
  setNewValue,
  categoryName,
  categoryColor,
}) {
  const [error, setError] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    if (item.find((e) => e.text === newValue) === undefined) {
      add(newValue, categoryName, categoryColor);
      setSearchValue("");
      setNewValue("");
      setOpenItemModal(false);
    } else {
      setError(true);
    }
  };
  const onCancel = () => {
    setOpenItemModal(false);
    setNewValue("");
  };

  const onChange = (event) => {
    setNewValue(event.target.value);
    setError(false);
  };

  return (
    <div className="formItem__container">
      <div className="formSubtitle__container">
        <span>New Task</span>
        <input
          onClick={onCancel}
          type="image"
          alt="cancel icon"
          src="https://img.icons8.com/color/48/000000/cancel--v1.png"
          className="input-cancel"
        />
      </div>
      <form className="form__container active" onSubmit={onSubmit}>
        <div className="form-name__container">
          <span>Task Name</span>
          <input
            className="textarea"
            type='text'
            autoFocus
            value={newValue}
            onChange={onChange}
            placeholder="New task.."
            required
          />
        </div>
        {!!error && <p className="ErrorItem__exists">Item already exists</p>}
        <div className="form-category__container">
          <span>Select Category</span>
          <div className="categorieButton__container">{category.map(render)}</div>
        </div>
      </form>
    </div>
  );
}

export { FormItem };
