import './CreateButton.css'

function CreateButton({setOpenItemModal}) {
    const onClickButton = (msg) => {
      setOpenItemModal(prevState => !prevState)
    }    
    
    return (
        <button 
            className='create__button'
            onClick={onClickButton}
        >+</button>
    )
}

export { CreateButton }