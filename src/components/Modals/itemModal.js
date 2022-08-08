import ReactDOM from 'react-dom';
import './ItemModal.css'

function ItemModal({ children }) {
    return ReactDOM.createPortal(
        <div className='itemModal__background'>
            {children}
        </div>,
        document.getElementById('modal')
    )
}

export { ItemModal }