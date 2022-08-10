import { useState } from "react";
import { DeleteButton } from "../DeleteButton";
import "./Items.css";

function Items(props) {
  // const [checkColor, setCheckColor] = useState('')
  const checkStyle = {
    boxShadow: `0 0 2px #fff, 0 0 5px #fff, 0 0 10px ${props.categoryColor},
    0 0 10px ${props.categoryColor}, 0 0 10px ${props.categoryColor}, 0 0 10px ${props.categoryColor}`,
    border: `1px solid ${props.categoryColor}`,
  }
  
  return (
    <div
      className={`items__container `}
    >
      <div id="checkColor"
        className={`item__check ${!!props.completed && "item__check-completed"}`}
        // onClick={props.onComplete}
        onClick={()=>console.log(props.category)}
        style={checkStyle}
>
        <img
          src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-check-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
          alt="check icon"
        />
      </div>
      <p className={`item__p ${props.completed && "item__p-completed"}`}>
        {props.text}
      </p>
      <DeleteButton onDelete={props.onDelete} />
    </div>
  );
}

export { Items };
