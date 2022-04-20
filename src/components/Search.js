import React from "react";
import './../styles/Search.css'

function Search({ searchValue, setSearchValue}) {
    
    //event traer muchísimas propiedades. 
    const onSearchValueChange = (event) => {
        // console.log(event.target.value)
        setSearchValue(event.target.value)
    }
    
    return (
        <div className="Search_container">
            <input className='Search' placeholder="Search..." onChange={onSearchValueChange} value={searchValue}/>
            <div className="Img_container">
                <img className="Img" src="https://img.icons8.com/color/48/000000/search--v1.png" alt="search icon" />
            </div>
        </div>
    )
}

export { Search }