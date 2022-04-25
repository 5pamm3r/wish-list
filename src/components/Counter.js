import React from 'react';
import './../styles/Counter.css'
import { Context } from './Context';

function Counter() {
    const { totalTodos, completedTodos } = React.useContext(Context)

    return (
        <h2 className='Counter'>Has completado {completedTodos} de {totalTodos } TODOs.</h2>
    )
}

export  { Counter };