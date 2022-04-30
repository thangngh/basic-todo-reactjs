import React from 'react';

const Footer = ({ todo, cleanTodo, selectTodo, handleMultipleRemove }) => {
    const select = selectTodo();

    const removeTodo = () => {
        const selectIndex = [];
        if (select === 0) {
            cleanTodo();
        } else {
            for (let i = 0; i < todo.length; i++) {
                if (todo[i].completed) {
                    selectIndex.push(i);
                }
            }

            handleMultipleRemove(selectIndex);
        }
    };
    return (
        <div className="input-todo">
            <span>Select ({select} todo)</span>
            <button className="btn-remove" onClick={removeTodo}>
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
                <span>Remove {select === 0 ? 'All' : select}</span>
            </button>
            {/* </label> */}
        </div>
    );
};

export default Footer;
