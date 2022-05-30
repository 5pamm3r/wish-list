import React from "react";
import "./Form.css";

let categorie = "";

function Form({ add, setOpenModal, setSearchValue }) {
  const [newValue, setNewValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault(); //Ayuda a que cuando el form se envíe, no va a recargar o enviar los datos a alguna parte, lo cancela.
    add(newValue, categorie);
    setSearchValue("");
    setOpenModal(false);
  };
  const onCancel = () => {
    setOpenModal(false);
  };

  //Cada vez que escribe manda el texto.
  const onChange = (event) => {
    setNewValue(event.target.value);
  };

  const onClickButton = (e) => {
    e.target.value === "personal"
      ? (categorie = "personal")
      : (categorie = "business");
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
      <input
        onClick={onCancel}
        type="image"
        alt="cancel icon"
        src="https://img.icons8.com/color/48/000000/cancel--v1.png"
        className="input-cancel"
      />
      <div className="categorieButton__container">
        <button
          type="submit"
          className="button-categorie personal-btn"
          value="personal"
          onClick={onClickButton}
        >
          Personal
        </button>
        <button
          type="submit"
          className="button-categorie business-btn"
          value="business"
          onClick={onClickButton}
        >
          Business
        </button>
      </div>
      {/* <button className="btn-add" type="submit">
        Add
      </button>{" "} */}
      {/*Ejecuta el evento onSubmit */}
    </form>
  );
}

export { Form };
