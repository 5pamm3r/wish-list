import React from "react";
import { Title } from './Title';
import { Counter } from './Counter';
import { Search } from './Search';
import { List } from './List';
import { Items } from './Items';
import { CreateButton } from './CreateButton';

function AppUI(props) {
    return (
    <React.Fragment> 
      <Title />
      <Counter total={props.totalTodos} completed={props.completedTodos} />

      <Search searchValue={props.searchValue} setSearchValue={props.setSearchValue} />
      <List>
      {props.error && <p>Hubo un error..</p>}
      {props.loading && <p>Estamos cargando..</p>}
      {(!props.loading && !props.searchedTodos.length) && <p>Crea tu primer todo</p>}

        {props.searchedTodos.map(todo => (
          <Items 
            key={todo.text} 
            text={todo.text} 
            completed={todo.completed} 
            onComplete={() => props.toggleCompleteTodos(todo.text)}
            onDelete={() => props.deleteTodo(todo.text)}
          />
        ))}
      <CreateButton />
      </List>
        
    </React.Fragment>
    );
}

export { AppUI }