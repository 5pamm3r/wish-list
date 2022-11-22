import React from "react";
import DeleteCategory from "../DeleteCategory";
import "./CategorieItems.css";

function CategorieItems(props) {
  const [stateDelete, setStateDelete] = React.useState(false);
  const barStyle = {
    width: `${props.progress | 0}%`,
    backgroundColor: `${props.color}`,
    boxShadow: `0 0 1px #fff, 0 0 3px #fff, 0 0 5px ${props.color},
    0 0 5px ${props.color}, 0 0 5px ${props.color}, 0 0 5px ${props.color}`,
  };
  const onClick = () => {
    setStateDelete((prevState) => !prevState);
  }

  return (
    <div className={`item__container ${!!stateDelete && 'active'}`} onClick={onClick}>
      {!stateDelete ? (
        <div className={`face front ${stateDelete}`}>
          <span className="item__count">{props.totalItemCategory} tasks</span>
          <h2 className="item__title">{props.title}</h2>
          <div className="progress__container" id="progressContainer">
            <div className={`progress__bar`} style={barStyle}></div>
          </div>
        </div>
      ) : (
        <div className="face back">
          <DeleteCategory
            setStateDelete={setStateDelete}
            state={stateDelete}
            deleteCategory={props.deleteCategory}
            deleteAllItemCategory={props.deleteAllItemCategory}
          />
        </div>
      )}
    </div>
  );
}

export { CategorieItems };
