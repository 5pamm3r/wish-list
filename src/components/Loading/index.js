import React from "react";
import './Loading.css'

function Loading() {
    return (
        <div className="loading__container">
            <span className="loading-complete">√</span>
            {/* <p className="loading-text">Cargando espere...</p> */}
            <span className="loading-delete">X</span>
        </div>
    )
}

export { Loading }