import React from "react";
import './../styles/Search.css'
import { Context } from "./Context";

function Search() {
    const { searchValue, setSearchValue} = React.useContext(Context)

    //event trae muchísimas propiedades. 
    const onSearchValueChange = (event) => {
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