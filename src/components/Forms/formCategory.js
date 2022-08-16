import React, { useState } from 'react'
import './FormCategory.css'

function FormCategory({ category, addCategory }) {
  const [value, setValue] = React.useState('')
  const [color, setColor] = useState('')

  const onSubmit = () => {
    if(category.find(e=>e.title === value) === undefined) {
      addCategory(value, color)
    }
  }

  const onChangeValue = e => {
    setValue(e.target.value)
  }
  const onChangeColor = (e) => {
    setColor(e.target.value)
  }

  return (
    <form className='FormCategory__container' onSubmit={onSubmit}>
      <textarea className='Category__textarea' placeholder='New category name' autoFocus required onChange={onChangeValue} />
      <div className='CategoryColor__container'>
        <span className='Subtitle__color'>Select color</span>
        <input className='Select__color' type='color' id='categoryColor' onChange={onChangeColor}/>
      </div>
      <button className='CreateCategory__button'>Create</button>
    </form>
  )
}

export default FormCategory