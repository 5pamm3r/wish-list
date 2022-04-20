import React from "react";
import './../styles/List.css'

function List(props) {
    return (
        <section className="list__container">
            { props.children }
        </section>
    );
}

export { List }