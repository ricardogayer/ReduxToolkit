import React from 'react';
import { useGetTodoQuery } from './store/api/todosAPI';

const TodoDetalhe = ( {todoId = 1} ) => {

  const { data: todo, isLoading } = useGetTodoQuery(todoId);

  if (isLoading) {
    return <h4> Loading... </h4>
}

  return (
    <div>
        <h1> Todo Detalhe </h1>
        <hr/>
        <p> { todo.id } </p>
        <p> { todo.title } </p>
        <p> { todo.completed ? "DONE" : "Pending" } </p>
    </div>
  )
}

export default TodoDetalhe