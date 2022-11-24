import React, { useState } from "react";
import "./FormCategory.css";

function FormCategory({ category, addCategory, setOpenCategModal }) {
  const [value, setValue] = useState("");
  const [color, setColor] = useState("");
  const [error, setError] = useState(false);
  const [active, setActive] = useState(false)

  const onSubmit = (event) => {
    event.preventDefault();
    if(category.find((e) => e.title.toLowerCase() === value.toLowerCase()) !== undefined) {
      setError(true);
      return;
    }
    addCategory(value, color);
    setOpenCategModal(prevState=>!prevState);
  };
  const onChangeValue = (e) => {
    setValue(e.target.value);
  };
  const onChangeColor = (e) => {
    setColor(e.target.value);
  };
  const onClickColor = (e) => {
    setColor(window.getComputedStyle(document.getElementById(e.target.id)).getPropertyValue('background-color'))
    //arreglar.
    document.getElementById(e.target.id).className += ' active'
    }
  return (
    <div className="FormCategory__container">
      <div className="FormCategory-title__container">
        <span>Add Category</span>
      </div>
      <form className="Form__container" onSubmit={onSubmit}>
        <div className="Form-name__container">
          <span>Category name</span>
          <input
            type="text"
            className="Category__textarea"
            placeholder="Type here..."
            autoFocus
            required
            onChange={onChangeValue}
          />
        </div>
        {!!error && (
          <p className="ErrorCategory__exists">This category already exists</p>
        )}
        <div className="CategoryColor__container">
          <span>Select color</span>
          <div className="Colors__container">
            <div className='first-color check' id="firstColor" onClick={onClickColor}></div>
            <div className='second-color check' id='secondColor' onClick={onClickColor}></div>
            <div className="third-color check" id="thirdColor" onClick={onClickColor}></div>
            <div className="fourth-color check" id="fourthColor" onClick={onClickColor}></div>
            <div className="fifth-color check" id="fifthColor" onClick={onClickColor}></div>
            <input
              className="Select__color"
              type="color"
              id="categoryColor"              
              onChange={onChangeColor}
            />
          </div>
        </div>
        <button className="CreateCategory__button">Create</button>
      </form>
    </div>
  );
}

export default FormCategory;
