
import React from 'react'
import TodoItem from './TodoItem'

function TodoList({todos}) {
    

    return (
        <div className="my-4">
            {todos.map((todo)=>   {
                return <TodoItem key={todos.id} todo={todo}/>;
            })}
        </div>
    )
}

export default TodoList

