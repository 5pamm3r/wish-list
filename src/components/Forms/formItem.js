import React, { useState } from "react";
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
    event.preventDefault(); //Ayuda a que cuando el form se envíe, no va a recargar o enviar los datos a alguna parte, lo cancela.
    if (item.find((e) => e.text === newValue) === undefined) {
      add(newValue, categoryName, categoryColor);
      setSearchValue("");
      setNewValue("");
      setOpenItemModal(false);
    } else {
      setError(true)
    }
  };
  const onCancel = () => {
    setOpenItemModal(false);
    setNewValue("");
  };

  const onChange = (event) => {
    setNewValue(event.target.value);
  };

  return (
    //Los form tienen un evento onSubmit
    <form className="form__container" onSubmit={onSubmit}>
      {/*Un textarea a diferencia del input, permite que el texto largo se desplace hacia abajo. */}
      <textarea
        className="textarea"
        autoFocus
        value={newValue}
        onChange={onChange}
        placeholder="New task.."
        required
      />
      {!!error && <p className="ErrorItem__exists">The item already exists</p>}
      <input
        onClick={onCancel}
        type="image"
        alt="cancel icon"
        src="https://img.icons8.com/color/48/000000/cancel--v1.png"
        className="input-cancel"
      />
      <div className="categorieButton__container">{category.map(render)}</div>
    </form>
  );
}

export { FormItem };
