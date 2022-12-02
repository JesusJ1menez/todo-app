import React from 'react';
import '../EmptyTodos/EmptyTodos.css';
import noResults from '../assets/imgs/noResults.svg';

function EmptySearchResults() {
  return (
    <>
      <p className='emptyTodo'>Sin resultados</p>
      <figure className='emptyTodoImg'>
        <img src={noResults} alt='emptyToDo' />
      </figure>
    </>
  );
}

export { EmptySearchResults };
