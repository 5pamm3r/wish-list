import { DeleteButton } from "../DeleteButton";
import IconCheck from '../../Assets/Icons/check.png'
import "./Items.css";
import { useState } from "react";

function Items({text, completed, onDelete, onComplete, categoryColor}) {
  // const [checkColor, setCheckColor] = useState('')
  const checkStyle = {
    boxShadow: `0 0 2px #fff, 0 0 4px #fff, 0 0 5px ${categoryColor},
    0 0 5px ${categoryColor}, 0 0 5px ${categoryColor}, 0 0 5px ${categoryColor}`,
    border: `1px solid ${categoryColor}`,
  }
  const [state, setState] = useState(false);
  const onMoveContainer = () => {
    setState(prevState=>!prevState)
  }

  return (
    <div
      className={`items__container ${!!state && 'items__container-click'}`}
    >
      <div id="checkColor"
        className={`item__check ${!!completed && "item__check-completed"}`}
        onClick={onComplete}
        style={checkStyle}
>
        <img
          src={IconCheck}
          alt="check icon"
        />
      </div>
      <textarea className={`item__textarea ${completed && "item__textarea-completed"}`} rows='1' defaultValue={text} disabled>
      </textarea>
      <DeleteButton onDelete={onDelete} onMoveContainer={onMoveContainer} />
    </div>
  );
}

export { Items };
