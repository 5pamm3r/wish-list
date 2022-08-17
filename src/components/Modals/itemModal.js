import ReactDOM from 'react-dom';
import './ItemModal.css'

function ItemModal({ children, setOpenItemModal }) {
  const onClick = (e) => {
    if(e.target.id === 'itemModal'){
      setOpenItemModal(prevState => !prevState)
    }
  }
    return ReactDOM.createPortal(
        <div id='itemModal' className='itemModal__background' onClick={onClick}>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { ItemModal }