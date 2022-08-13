import React from "react";
import "./CategorieItems.css";
function CategorieItems(props) {
  return (
    <div className={`item__container`}>
      <span className="item__count">{props.totalItemCategory} tasks</span>
      <h2 className="item__title">{props.title}</h2>
      <div className="progress__container" id="progressContainer">
        <div
          className={`progress__bar`}
          style={{ width: `${props.progress || 0}%`, backgroundColor: `${props.color}` }}
        ></div>
      </div>
      <button className="delete__category" onClick={props.onDelete}>
        X
      </button>
    </div>
  );
}

export { CategorieItems };
