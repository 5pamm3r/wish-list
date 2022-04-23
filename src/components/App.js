import React from 'react';
import { AppUI } from './AppUI';

function useLocalStorage(itemName, initialValue) {

  const [error, setError] = React.useState(false) //Por defecto false, se inicia con algún error. 
  const [loading, setLoading] = React.useState(true)
  const [item,  setItem] = React.useState(initialValue)  //Por defecto arr vacio.

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName) 
        let parsedItem
        
        //En caso que no hayan datos aún en localStorage. 
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify([initialValue]))
          parsedItem = [initialValue] //Hay que darle un estado por defecto a la aplicación, por ende si no hay nada en localstorage pasamos array vacío.
        } else {
          parsedItem = JSON.parse(localStorageItem)
        }
  
        setItem(parsedItem)
        setLoading(false)
        
      } catch (error) {
        setError(error)
      }

    }, 1000)
  },[initialValue]) //Aquí debe ir un []. Arreglar




   //Para persistir la información cuando se complete o borre un elem.  
   const saveItem = (newItem) => {
     try {
       const strg = JSON.stringify(newItem)
       localStorage.setItem(itemName, strg)
       setItem(newItem)
       
     } catch (error) {
       setError(error)
     }
  }

  return {
    item,
    saveItem,
    loading,
    error
  }
}



function App() {
 
  const {item, saveItem, loading, error} = useLocalStorage('WISHLIST_V1', []) //primero el elemento (item), segundo la actualización del mismo (saveItem). 

  
  const [searchValue, setSearchValue] = React.useState(''); //Para agregar estados. Entre comillas el valor inicial.

  const completedTodos = item.filter(todo => !!todo.completed).length //!!todo.completed = todo.completed == true. 
  const totalTodos = item.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = item;
  } else {
    searchedTodos = item.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

 

  const toggleCompleteTodos = (text) => {
    const todoIndex = item.findIndex(todo => todo.text === text)
    const newTodos = [...item]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    saveItem(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = item.findIndex(todo => todo.text === text)
    const newTodos = [...item]
    newTodos.splice(todoIndex, 1) 
    saveItem(newTodos)
  }

  // console.log('Render  (antes del useEffect)')
  // React.useEffect(() => {
  //   console.log('use effect')
  // }, [totalTodos])  
  // console.log('Render (luego del useEffect)')

  return (
    <AppUI 
      loading={loading}
      error={error}
      totalTodos={totalTodos}
      completedTodos={completedTodos}
      searchValue={searchValue}
      setSearchValue={setSearchValue}
      searchedTodos={searchedTodos}
      toggleCompleteTodos={toggleCompleteTodos}
      deleteTodo={deleteTodo}
    />
  );
}

export default App;
