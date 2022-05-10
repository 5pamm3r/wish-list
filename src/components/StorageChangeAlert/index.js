import React from 'react'
import { useStorageListener } from './useStorageListener'
import './StorageChangeAlert.css'

function ChangeAlert({ sincronize }) {
  const { show, toggleShow } = useStorageListener(sincronize)

  if (show) {
    return (
      <section className='changeAlert__section'>
        <div className='changeAlert__container'>
          <img src='https://img.icons8.com/emoji/48/000000/warning-emoji.png' alt='warning icon' />
          <p>Hubo cambios en otra pestaña o navegador</p>
          <button onClick={() => toggleShow(false)}>Recargar</button>

        </div>
      </section>
    )
  } else {
    return null
  }
}

export { ChangeAlert }