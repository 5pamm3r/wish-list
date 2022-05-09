import React from "react";
import "./Header.css";

function Header({ children, loading }) {
  return (
    <header className="header">
      {React.Children.toArray(children).map((child) =>
        React.cloneElement(child, { loading })
      )}
      {/*Convierte los children en un array, por cada elemeneto hacemos un clon de los hijos de Header, con la modificación de loading como true*/}
    </header>
  );
}

export { Header };
