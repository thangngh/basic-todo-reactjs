import React from 'react';
import TodoList from '../TodoList/TodoList';

const Todo = ({ todo, handleRemovex, toggleToDo, handleUpdate }) => {
    return (
        <ul className="list-todo">
            {todo.map((td, index) => (
                <TodoList
                    todo={td.todo}
                    key={index}
                    id={index}
                    handleRemove={handleRemovex}
                    completed={td.completed}
                    toggleToDo={toggleToDo}
                    handleUpdate={handleUpdate}
                />
            ))}
        </ul>
    );
};

export default Todo;
