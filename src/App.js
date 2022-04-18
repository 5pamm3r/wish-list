import React from 'react';
import { Title } from './Title';
import { Counter } from './Counter';
import { Search } from './Search';
import { List } from './List';
import { Items } from './Items';
import { CreateButton } from './CreateButton';
import './App.css';

const todos = [
  {
    text: 'Merengue',
    status: false
  },
  {
    text: 'Sandia',
    status: false
  },
  {
    text: 'Lechuga',
    status: false
  }
]


function App() {
  return (
    <React.Fragment> 
      <Title />
      <Counter />

      <Search />
      <List>
        {todos.map(todo => (
          <Items key={todo.text} text={todo.text}/>
        ))}
      </List>
        
      <CreateButton />
    </React.Fragment>
  );
}

export default App;
