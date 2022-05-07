import React from 'react';

function TodoList({
    todo,
    completed,
    id,
    handleRemove,
    toggleToDo,
    handleUpdate,
}) {
    const [edit, setEdit] = React.useState(false);
    const [value, setValue] = React.useState(todo);

    const handleToggleTodo = () => {
        toggleToDo(id);
    };

    const handleEditTodo = () => {
        setEdit(true);
    };

    const handleSave = (id) => {
        setEdit(false);
        if (value === '') {
            setValue(todo);
            return;
        }
        if (value !== todo) {
            handleUpdate(id, value);
        }
        if (value === todo) {
            alert('Nothing changed');
            setValue(todo);
        }
    };

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    if (edit) {
        return (
            <li>
                <label htmlFor="edit" className="card">
                    <input
                        name="edit"
                        type="text"
                        value={value}
                        onChange={handleChange}
                        id={id}
                        autoFocus
                    />
                    <button onClick={() => handleSave(id)} className="btn-edit">
                        <svg
                            className="w-6 h-6"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                            />
                        </svg>
                        <span>edit</span>
                    </button>
                </label>
            </li>
        );
    } else {
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
                            ? 'text-todo cursor-pointer'
                            : 'text-todo cursor-pointer line-through opacity-50'
                    }
                    onDoubleClick={handleEditTodo}
                >
                    {todo}
                </span>
                <button
                    onClick={() => {
                        handleRemove(id);
                    }}
                    className={
                        !completed ? 'btn-remove opacity-50' : 'btn-remove'
                    }
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
}

export default TodoList;
