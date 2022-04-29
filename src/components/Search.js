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
        </div>
    )
}

export { Search }