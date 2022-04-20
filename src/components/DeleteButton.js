import './../styles/DeleteButton.css'

function DeleteButton(props) {
    return (
        <button 
            className="delete__button"
            onClick={props.onDelete}
        >X</button>
    )
}

export { DeleteButton }