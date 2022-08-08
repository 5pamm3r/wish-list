import React from "react";
import "./Categorie.css";
function Categorie(props) {
  const onClick = () => {
    props.setOpenCategModal(prevState => !prevState)
    console.log(props.category)
  }

  return (
    <section className="categorie__container">
      <h2 className="categorie__title">CATEGORIES</h2>
      <ul className="categorieItem__container">
        {props.category.map(props.render)}
        <div className="newCategory">
          <div className="item__container">
            <button className="btn__add" onClick={onClick}>+</button>
            <span className="item__title">New Category</span>
          </div>
        </div>
      </ul>
    </section>
  );
}

export { Categorie };
