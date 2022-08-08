import React from 'react'
import './CategoryModal.css'

function CategoryModal({ children }) {
  return (
    <div className='CategoryModal__container'>
      {children}
    </div>
  )
}

export { CategoryModal }