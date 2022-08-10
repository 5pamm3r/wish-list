import React from "react";
import "./CategorieItems.css";
function CategorieItems(props) {
  
  const [progress, setProgress] = React.useState('')

  React.useEffect(()=>{
    setProgress(props.progress)
  },[props.progress, progress])

  

  return (
    <div className={`item__container`}>
      <span className="item__count">{props.count} tasks</span>
      <h2 className="item__title">{props.title}</h2>
      <div className="progress__container" id="progressContainer">
        <div
          className={`progress__bar ${props.progressColor} `}
          style={{ width: `${progress || 0}%` }}
          ></div>
      </div>
      <button className='delete__category' onClick={props.onDelete}>X</button>
    </div>
  );
}

export { CategorieItems };
