import React from 'react';
import TodoList from '../TodoList/TodoList';

const Todo = ({ todo, handleRemovex, toggleToDo }) => {
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
                />
            ))}
        </ul>
    );
};

export default Todo;
