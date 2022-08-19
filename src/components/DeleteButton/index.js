import './DeleteButton.css'
import filledTrash from '../../Assets/Icons/filled-trash.png'

function DeleteButton(props) {
    return (
        <button 
            className="delete__button"
            onClick={props.onDelete}
        ><img src={filledTrash} alt='delete icon' /></button>
    )
}

export { DeleteButton }