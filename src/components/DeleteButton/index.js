import './DeleteButton.css'

function DeleteButton(props) {
    return (
        <button 
            className="delete__button"
            onClick={props.onDelete}
        ><img src='https://img.icons8.com/plasticine/100/000000/filled-trash.png' alt='delete icon' /></button>
    )
}

export { DeleteButton }