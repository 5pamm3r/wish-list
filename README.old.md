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