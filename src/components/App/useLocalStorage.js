import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [error, setError] = React.useState(false); //Por defecto false, se inicia con algún error.
  const [loading, setLoading] = React.useState(true);
  const [item, setItem] = React.useState(initialValue); //Por defecto arr vacio.
  const [sincronizedItem, setSincronizedItem] = React.useState(true); //Nos dirá si estamos sincronizados con todas las pestañas del navegador o no.

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;

        //En caso que no hayan datos aún en localStorage.
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]));
          parsedItem = [initialValue]; //Hay que darle un estado por defecto a la aplicación, por ende si no hay nada en localstorage pasamos array vacío.
        } else {
          parsedItem = JSON.parse(localStorageItem);
        }

        setItem(parsedItem);
        setLoading(false);
        setSincronizedItem(true); //Desaparece mensaje. Esta sincronizado.
      } catch (error) {
        setError(error);
      }
    }, 1000);
  }, [sincronizedItem]); //Sólo se ejecuta cuando haya un cambio en sincronizedItem para volver a cargar los elementos.

  //Para persistir la información cuando se complete o borre un elem.
  const saveItem = (newItem) => {
    try {
      const strg = JSON.stringify(newItem);
      localStorage.setItem(itemName, strg);
      setItem(newItem);
    } catch (error) {
      setError(error);
    }
  };

  
  const sincronizeItem = () => {
    setLoading(true);
    setSincronizedItem(false)
  };

  return {
    item,
    saveItem,
    loading,
    error,
    sincronizeItem 
  };
}

export { useLocalStorage };
