import React from 'react';
import './Counter.css'

function Counter({ completed, total, loading }) {

    return (
        <h2 className={`counter ${!!loading && "counter-loading"}`} >Completed {completed} out of {total } tasks.</h2>
    )
}

export  { Counter };