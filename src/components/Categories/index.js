import React from "react";
import "./Categories.css";
function Categories(props) {
  const onClick = () => {
    props.setOpenCategModal(prevState => !prevState)
  }

  return (
    <section className="categories__container">
      <h2 className="categories__title">CATEGORIES</h2>
      <ul className="categoriesItem__container">
        {props.category.map(props.render)}
        <div className="newCategory__container">
          <div className="newCategory__item">
            <button className="btn__add" onClick={onClick}>+</button>
            {/* <span className="item__title">New Category</span> */}
          </div>
        </div>
      </ul>
    </section>
  );
}

export { Categories };
