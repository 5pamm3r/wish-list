import './../styles/CreateButton.css'

function CreateButton(props) {
    const onClickButton = (msg) => {
        props.setOpenModal(prevState => !prevState)
    }    
    
    return (
        <button 
            className='create__button'
            onClick={onClickButton}
        >+</button>
    )
}

export { CreateButton }