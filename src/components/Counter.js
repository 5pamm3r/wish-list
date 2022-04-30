import React from 'react';
import './../styles/Counter.css'
import { Context } from './Context';

function Counter() {
    const { totalTodos, completedTodos } = React.useContext(Context)

    return (
        <h2 className='Counter'>Completed {completedTodos} out of {totalTodos } tasks.</h2>
    )
}

export  { Counter };