import React from 'react';
import './EmptyTodos.css';
import emptyToDo from '../assets/imgs/emptyToDo.svg';

function EmptyTodos() {
  return (
    <>
      <p className='emptyTodo'>¡Crea tu primer Tarea!</p>
      <figure className='emptyTodoImg'>
        <img src={emptyToDo} alt='emptyToDo' />
      </figure>
    </>
  );
}

export { EmptyTodos };
