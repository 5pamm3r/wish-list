import React from 'react'
import { Context } from '../Context'

function Form() {
    const [newValue, setNewValue] = React.useState('')
    
    const {
        add,
        setOpenModal,
    } = React.useContext(Context)
    
    const onSubmit = (event) => {
        event.preventDefault() //Ayuda a que cuando el form se envíe, no va a recargar o enviar los datos a alguna parte, lo cancela. 
        add(newValue)
        setOpenModal(false)
    }
    const onCancel = () => {
        setOpenModal(false)
    }

    //Cada vez que escribe manda el texto.
    const onChange = (event) => {
        setNewValue(event.target.value)
    }

    return ( 
        //Los form tienen un evento onSubmit
        <form onSubmit={onSubmit}> 
            {/*Un textarea a diferencia del input, permite que el texto largo se desplace hacia abajo. */}
            <textarea 
                autoFocus
                value={newValue}
                onChange={onChange}
                placeholder='Ingrese un nuevo item'
            />
            <div>
                <button type='button' onClick={onCancel}>Cancelar</button>
                <button type='submit'>Añadir</button> {/*Ejecuta el evento onSubmit */}
            </div>
        </form>
    )
}

export { Form }