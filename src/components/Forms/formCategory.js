import React from 'react'
import './FormCategory.css'

function FormCategory({ category, addCategory }) {
  const [value, setValue] = React.useState('')

//hacer que no se repita la misma categoria.
  const onSubmit = () => {
    if(!category.includes(value)){
      addCategory(value)
    }
  }

  const onChange = e => {
    setValue(e.target.value)
  }


  return (
    <form className='FormCategory__container' onSubmit={onSubmit}>
      <textarea placeholder='New category name' autoFocus onChange={onChange} />
      <div className='categoryColor__container'>
        <span>Select a color</span>
        <input type='color' />
      </div>
      <button>Ir</button>
    </form>
  )
}

export default FormCategory