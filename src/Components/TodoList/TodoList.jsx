import React from 'react';

function TodoList({ todo, completed, id, handleRemove, toggleToDo }) {
    const handleToggleTodo = () => {
        toggleToDo(id);
    };
    return (
        <li className="card">
            <input
                type="checkbox"
                className="check-todo"
                onChange={handleToggleTodo}
                checked={completed}
            />
            <span
                className={
                    !completed
                        ? 'mr-2 text-base font-bold'
                        : 'mr-2 text-base font-bold line-through opacity-50'
                }
            >
                {todo}
            </span>
            <button
                onClick={() => {
                    handleRemove(id);
                }}
                className={!completed ? 'btn-remove opacity-50' : 'btn-remove'}
                disabled={!completed}
            >
                <svg
                    className="w-6 h-6 "
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
                    ></path>
                </svg>
                <span>Remove</span>
            </button>
        </li>
    );
}

export default TodoList;
