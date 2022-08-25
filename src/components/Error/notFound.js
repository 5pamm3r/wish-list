import React from 'react'
import './NotFound.css'
import sateliteImg from '../../Assets/Images/satelite.png'

function NotFound() {
  return (
    <div className='NotFound__container'>
      <h1 className='NotFound__title'><span className='NotFound__404'>404</span> Whoops!</h1>
      <p className='NotFound__subtitle'>We can't seem to find the space you're looking for :(</p>
      <button className='NotFound__button'>Back to Home</button>
      <img src={sateliteImg} alt='satelite' />
    </div>
  )
}

export default NotFound