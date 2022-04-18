import React from "react";
import './Search.css'

function Search() {
    return (
        <div className="Search_container">
            <input className='Search' placeholder="Search..." />
            <div className="Img_container">
                <img className="Img" src="https://img.icons8.com/color/48/000000/search--v1.png" alt="search icon" />
            </div>
        </div>

    )
}

export { Search }