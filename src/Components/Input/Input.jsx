import React from 'react';

const Input = ({ addTodo }) => {
    const [value, setValue] = React.useState('');

    const handleChange = (e) => {
        setValue(e.target.value);
    };

    const handleClick = (e) => {
        if (value === '') {
            alert('Please enter a todo');
        } else {
            addTodo(value.trim());
            setValue('');
        }
    };

    return (
        <div>
            <label htmlFor="add" className="input-todo">
                <input
                    name="add"
                    type="text"
                    placeholder="Add a task"
                    className="input-text"
                    onChange={handleChange}
                    value={value}
                />
                <button type="submit" onClick={handleClick} className="btn-add">
                    <svg
                        className="h-6 w-6"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        {' '}
                        <path stroke="none" d="M0 0h24v24H0z" />{' '}
                        <circle cx="12" cy="12" r="9" />{' '}
                        <line x1="9" y1="12" x2="15" y2="12" />{' '}
                        <line x1="12" y1="9" x2="12" y2="15" />
                    </svg>
                    <span>Add</span>
                </button>
            </label>
        </div>
    );
};

export default Input;
