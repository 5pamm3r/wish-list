import './DeleteButton.css'
import filledTrash from '../../Assets/Icons/filled-trash.png'

function DeleteButton(props) {
  const onClick = () => {
    props.onMoveContainer()
    props.onDelete()
  }
    return (
        <button 
            className="delete__button"
            onClick={onClick}
        ><img src={filledTrash} alt='delete icon' /></button>
    )
}

export { DeleteButton }