import React from 'react'

function Todo(props) {

    const { todo, toggleTodo } = props

    return (
        <div onClick={() => toggleTodo(todo.id)} className={`todo ${todo.completed ? "completed" : "incomplete"}`}>

            <h3>{todo.title}</h3>

            <div className='status'>
                {todo.completed ? <div>Completed</div> : <div>Incomplete</div>}
            </div>

        </div>
    )
}

export default Todo