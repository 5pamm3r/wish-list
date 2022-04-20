import {DeleteButton} from './DeleteButton'
import './../styles/Items.css'

function Items(props) {
    return (
        <div className="items__container">
            <span className={`item__check ${props.completed && 'item__check-completed'}`} onClick={props.onComplete}>√</span>
            <p className={`item__p ${props.completed && 'item__p-completed'}`}>{props.text}</p> {/*Si el item recibe una prop completed, agrega la clase item__p-completed */}
            <DeleteButton onDelete={props.onDelete} />
        </div>
    )
   
}

export { Items  }