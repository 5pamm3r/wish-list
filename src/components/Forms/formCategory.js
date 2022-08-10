import React, { useState } from 'react'
import './FormCategory.css'

function FormCategory({ category, addCategory }) {
  const [value, setValue] = React.useState('')
  const [color, setColor] = useState('')

//hacer que no se repita la misma categoria.
  const onSubmit = () => {
    if(!category.includes(value)){
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
      <textarea placeholder='New category name' autoFocus onChange={onChangeValue} />
      <div className='categoryColor__container'>
        <span>Select a color</span>
        <input type='color' id='categoryColor' onChange={onChangeColor} />
      </div>
      <button>Ir</button>
    </form>
  )
}

export default FormCategory