import React from "react";
import "./CategorieItems.css";
function CategorieItems(props) {
  
  return (
    <div className={`item__container`}>
      <span className="item__count">{props.count} tasks</span>
      <h2 className="item__title">{props.title}</h2>
      <div className="progress__container" id="progressContainer">
        <div
          className={`progress__bar ${props.progressColor} `}
          style={{ width: `${props.progress}%` }}
        ></div>
      </div>
    </div>
  );
}

export { CategorieItems };
