import React, { useState } from "react";
import "./FormCategory.css";

function FormCategory({ category, addCategory, setOpenCategModal }) {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const onSubmit = (event) => {
    event.preventDefault();
    if (
      category.find((e) => e.title.toLowerCase() === value.toLowerCase()) ===
      undefined
    ) {
      addCategory(value, color);
      setOpenCategModal((prevState) => !prevState);
    } else {
      setError(true);
    }
  };
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <form className="FormCategory__container" onSubmit={onSubmit}>
      <textarea
        className="Category__textarea"
        placeholder="New category name"
        autoFocus
        required
        onChange={onChangeValue}
      />
      {!!error && (
        <p className="ErrorCategory__exists">The category already exists</p>
      )}
      <div className="CategoryColor__container">
        <span className="Subtitle__color">Select color</span>
        <input
          className="Select__color"
          type="color"
          id="categoryColor"
          onChange={onChangeColor}
        />
      </div>
      <button className="CreateCategory__button">Create</button>
    </form>
  );
}

export default FormCategory;
