import React from 'react';
import { AppUI } from './AppUI';

// import './../styles/App.css';

const defaultTodos = [
  {
    text: 'Codear un rato',
    completed: true
  },
  {
    text: 'Limpiar cuarto',
    completed: false
  },
  {
    text: 'Pasear Maggie',
    completed: false
  },
  {
    text: 'Fumarse ese',
    completed: false
  }
]


function App() {
  const [todos,  setTodos] = React.useState(defaultTodos)
  
  const [searchValue, setSearchValue] = React.useState(''); //Para agregar estados. Entre comillas el valor inicial.

  const completedTodos = todos.filter(todo => !!todo.completed).length //!!todo.completed = todo.completed == true. 
  const totalTodos = todos.length

  let searchedTodos = []

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter(todo => {
      const todoText = todo.text.toLowerCase()
      const searchText = searchValue.toLowerCase()
      return todoText.includes(searchText)
    })
  }

  const toggleCompleteTodos = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
  }

  const deleteTodo = (text) => {
    const todoIndex = todos.findIndex(todo => todo.text === text)
    const newTodos = [...todos]
    newTodos.splice(todoIndex, 1) 
    setTodos(newTodos)
  }


  return (
    <AppUI 
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
