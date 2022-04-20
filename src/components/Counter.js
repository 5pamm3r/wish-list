import React from 'react';
import './../styles/Counter.css'

function Counter({ total, completed }) {
    
    return (
        <h2 className='Counter'>Has completado {completed} de {total } TODOs.</h2>
    )
}

export  { Counter };