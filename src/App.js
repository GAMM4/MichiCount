// import logo from './platzi.webp';

import { TodoCounter } from './TodoCounter';  
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';
import './App.css';
import React from 'react';

const defaultTodos=[
  {text: 'Michi 1', completed: true},  
  {text: 'Michi 2', completed: false},  
  {text: 'Michi 3', completed: true},  
  {text: 'Michi 4', completed: true},  
]

function App() {
  return (
    <React.Fragment>
    
      <TodoCounter total={15} completed={2} />
      
      <TodoSearch />

      <TodoList>
        {defaultTodos.map(todo =>
          (<TodoItem 
          key={todo.text} 
          text={todo.text}
          completed={todo.completed}
          />))}
      </TodoList> 
      
      <CreateTodoButton />
      </React.Fragment>

    
  );
}

export default App;
