# wishList

Instalar create-react-app: Entorno de desarrollo ya funcionando. 

    npx create-react-app ./ => npx instala temporalmente la herramienta en el dir actual. Permite tener siempre la última versión actualizada. 


Cada componente de React sólo soporta que le enviemos un componente. Se usa React.Fragment para minimizar la cantidad de div's innecesarios que pudiera generar ésto. 


Renderizar elementos en una lista:
    
    Tenemos que enviar una propiedad especial 'key' a los componentes, para que React pueda identificar cuál componente es cuál en una lista, y no renderizar innecesariamente. 


Style:

    En react se usan obj {}.
    

React useState => Para manejar estados.

    Cambiar cuando el usuario haga alguna acción. 
    React.useState devuelve un array con 2 posiciones, la primera es el estado, la otra posición es una función setState que nos permite editar nuestro estado.
    Con cada cambio react hace un re-render.


Stateful y Statless components

    -Los comp Stateful son los componentes que guardan y manejan estados. Ej: React.useState.
    -Los comp Statless son los componentes que sólo presentan información. Es decir son los componentes que reciben props o simplemente muestran algún contenido. 


Local Storage: Persistencia de datos directamente en el frontend sin un backend. Guarda la información en el cache del navegador. Sólo puede guardar texto. 

    JSON.stringify()  =>  Transforma en texto cualquier obj js.    

    const ejemplo = JSON.stringify([{text:'textoEjemplo',completed:true}])
    localStorage.setItem('nameItem', ejemplo)
    JSON.parse(localStorage.getItem('nameItem)) 


Custom React Hook =>  Para manejar información sobre localStorage. 

    -El nombre de los Custom React Hooks debe empezar con use.. .
    -Si retorna 2 elementos (estado y actualizador), podemos enviar un arr de 2 posiciones, pero si tenemos más estados en ese mismo Custom React Hook, se recomienda enviar un obj, no un array. 


useEffect  => Manejo de efectos (eventos externos)

    React hook que permite ejecutar cierta  parte del código de nuestros componentes para que no se ejecuten cada vez que hacemos render al componente, sino dependiendo de ciertas condiciones. 

    Se carga por último, justo luego del render de React, pero antes del render en el navegador. En cambio, el useLayoutEffect se ejecuta luego del render de React y del render en el navegador.

    Se agrega un segundo parámetro tipo [] vacío para que no re-renderice. Sólo se ejecuta una vez. Si agregamos un elemento al array, se ejecutará el efecto cada vez que el elemento reciba algún cambio. Si no agregamos nada, se ejecuta en cada render. 


React context: Permite crear providers y consumers para compartir el estado entre los diferentes componentes de la app. Para no enviar props por todas partes. 

    -El Provider debe envolver la app. Debe tener por dentro a cualquier componente donde llamemos a Consumer.

    -Render props: No enviar directamente componentes de react, sino una funcion que pueda recibir parámetros y ahí devolver los componentes.


useContext: Alternativa más limpia a Consumers.