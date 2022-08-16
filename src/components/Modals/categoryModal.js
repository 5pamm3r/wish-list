import ReactDOM from 'react-dom';
import './CategoryModal.css'

function CategoryModal({ children, setOpenCategModal }) {
  const onClick = (e) => {
    if(e.target.id === 'categoryModal'){
      setOpenCategModal(prevState => !prevState)
    }
  }
  return ReactDOM.createPortal(
    <div id='categoryModal' className='CategoryModal__container' onClick={onClick}> 
      {children}
    </div>,
    document.getElementById('categoryModal')
  )
}

export { CategoryModal }