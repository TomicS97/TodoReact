import React, { useState } from 'react';
import TodoForm from './TodoForm';
import { RiCloseCircleLine } from 'react-icons/ri';
import { TiEdit } from 'react-icons/ti';

function Todo({ todos, completeTodo, removeTodo, editTodo }) {
    const [edit, setEdit] = useState({
        id: null,
        value: ''
    });

    const submitEdit = value => {
        editTodo(edit.id, value)
        setEdit({
            id: null,
            values: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitEdit} />
    }


    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todo-row' : 'todo-row'} key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className="icons">
                <RiCloseCircleLine
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <TiEdit
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ))
}

export default Todo
