import React from "react";

function useStorageListener(sincronize) {
  const [storageChange, setStorageChange] = React.useState(false); //Por defecto false mientras no hagan cambios en el navegador.

  //Dentro de un efecto para que no se llame cada vez que el componente se actualice.
  React.useEffect(() => {
    window.addEventListener("storage", (change) => {
      //Si el cambio fue en la key, mostramos el aviso.
      if (change.key === "WISHLIST_V1") {
        console.log("hubo cambios");
        setStorageChange(true);
      }
    });
  }, []);

  const toggleShow = () => {
    sincronize();
    setStorageChange(false);
  };

  return {
    show: storageChange, 
    toggleShow
  }
}

export { useStorageListener };
