import React from 'react';
import './../styles/Counter.css'

function Counter({ completed, total }) {

    return (
        <h2 className='Counter'>Completed {completed} out of {total } tasks.</h2>
    )
}

export  { Counter };