import { useState } from 'react'
import { useGetTodosQuery } from './store/api/todosAPI'
import TodoDetalhe from './TodoDetalhe';

const TodoApp = () => {

    const [todoId, setTodoId] = useState(1);

    const { isLoading, data: todos = [] } = useGetTodosQuery();

    const handleClick = (id) => {
        console.log(id);
        setTodoId(id);
    }

  return (
    <div>
        <h1> Todos - RTK Query </h1>
        <hr/>   
        { isLoading ? <h4> Loading... </h4> : null }

        <ul>
            { todos.map(({id, title, completed }) => (
                <li key={id} onClick={() => {handleClick(id)}}> {title} </li>
                
            )) }
        </ul>

        <button> Next </button>
        <hr/>

        <TodoDetalhe todoId={todoId}/>
    </div>
  )
}

export default TodoApp;