import './CreateButton.css'

function CreateButton({setOpenModal}) {
    const onClickButton = (msg) => {
      setOpenModal(prevState => !prevState)
    }    
    
    return (
        <button 
            className='create__button'
            onClick={onClickButton}
        >+</button>
    )
}

export { CreateButton }