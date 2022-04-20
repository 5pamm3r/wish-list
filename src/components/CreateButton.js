import './../styles/CreateButton.css'

function CreateButton(props) {
    return (
        <button 
            className='create__button'
            onClick={() => alert('Aquí va el modal')}
        >+</button>
    )
}

export { CreateButton }