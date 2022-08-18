import { useEffect, useState } from "react";
import { DeleteButton } from "../DeleteButton";
import "./Items.css";

function Items({text, completed, onDelete, onComplete, categoryColor}) {
  // const [checkColor, setCheckColor] = useState('')
  const checkStyle = {
    boxShadow: `0 0 2px #fff, 0 0 5px #fff, 0 0 10px ${categoryColor},
    0 0 10px ${categoryColor}, 0 0 10px ${categoryColor}, 0 0 10px ${categoryColor}`,
    border: `1px solid ${categoryColor}`,
  }

  return (
    <div
      className={`items__container `}
    >
      <div id="checkColor"
        className={`item__check ${!!completed && "item__check-completed"}`}
        onClick={onComplete}
        style={checkStyle}
>
        <img
          src="https://img.icons8.com/external-tanah-basah-detailed-outline-tanah-basah/48/ffffff/external-check-user-interface-tanah-basah-detailed-outline-tanah-basah.png"
          alt="check icon"
        />
      </div>
      <textarea className={`item__textarea ${completed && "item__textarea-completed"}`} rows='1' defaultValue={text}>
      </textarea>
      <DeleteButton onDelete={onDelete} />
    </div>
  );
}

export { Items };
