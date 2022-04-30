import { useState } from 'react';
import Footer from './Components/Footer/Footer';
import Input from './Components/Input/Input';
import Todo from './Components/Todo/Todo';
import './styles/tailwind.css';

const App = () => {
    const [todos, setTodos] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const addTodo = (todo) => {
        const newTodo = { todo: todo, completed: false };
        const todoExists = todos.find((todo) => todo.todo === newTodo.todo);
        if (!todoExists) {
            setTodos([...todos, newTodo]);
        } else {
            alert('Todo already exists');
        }
    };

    const toggleToDo = (index) => {
        const newTodos = [...todos];
        newTodos[index].completed = !newTodos[index].completed;
        setTodos(newTodos);
    };

    const handleRemove = (index) => {
        const newTodo = todos.filter((_, idx) => idx !== index);
        setTodos(newTodo);
    };

    const handleMultipleRemove = (index) => {
        const newTodo = todos.filter((_, idx) => !index.includes(idx));
        setTodos(newTodo);
    };
    const cleanTodo = () => {
        setTodos([]);
    };

    const selectTodo = () => {
        const todoList = todos.filter((td) => td.completed === true);
        return todoList.length;
    };

    return (
        <div className="flex flex-col justify-center items-center mt-20 w-3/4 m-auto">
            <form onSubmit={handleSubmit}>
                <h1 className="text-3xl font-bold underline mb-4 text-center">
                    TODO LIST
                </h1>
                <Input addTodo={addTodo} />
                <Todo
                    todo={todos}
                    handleRemovex={handleRemove}
                    toggleToDo={toggleToDo}
                />
                <Footer
                    cleanTodo={cleanTodo}
                    todo={todos}
                    selectTodo={selectTodo}
                    handleMultipleRemove={handleMultipleRemove}
                />
            </form>
        </div>
    );
};

export default App;
