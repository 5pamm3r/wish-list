import React from "react";
import { Title } from './Title';
import { Counter } from './Counter';
import { Search } from './Search';
import { List } from './List';
import { Items } from './Items';
import { CreateButton } from './CreateButton';
import { Context } from './Context/index'


function AppUI() {

  //Obtenemos las props que vamos a necesitar. Alternativa a Consumers.
  const {
    error,
    loading,
    searchedTodos,
    toggleCompleteTodos,
    deleteTodo
  } = React.useContext(Context)  
  
  return (
    <React.Fragment> 
      <Title />
      <Counter/>

      <Search />
      <List>
        {error && <p>Hubo un error..</p>}
        {loading && <p>Estamos cargando..</p>}
        {(!loading && !searchedTodos.length) && <p>Crea tu primer todo</p>}

          {searchedTodos.map(todo => (
            <Items 
              key={todo.text} 
              text={todo.text} 
              completed={todo.completed} 
              onComplete={() => toggleCompleteTodos(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
          ))}
      <CreateButton />
      </List>        
    </React.Fragment>
    );
}

export { AppUI }