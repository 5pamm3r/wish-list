import React from "react";
import "./Categorie.css";
function Categorie(props) {
 
  return (
    <section className="categorie__container">
      <h2 className="categorie__title">CATEGORIES</h2>
      <ul className="categorieItem__container">
        {props.CATEGORIES.map(props.render)}
        {props.children}
      </ul>
    </section>
  );
}

export { Categorie };
