import { useEffect, useRef, useState } from 'react';
import './Css/todo.css';
import TodoItems from './TodoItems';
let count = 0;
function Todo() {
    const [todos, setTodos] = useState([]);
    const inputRef = useRef(null);
    const add = () => {
        const inputValue = inputRef.current.value.trim(); // Trim to remove any leading or trailing spaces
        if (!inputValue) {
            // If input is empty, don't add a new todo
            return;
        }
        
        const trimmedText = inputValue.substring(0, 53); // Limit text to 53 characters
        setTodos([...todos, { no: count++, text: trimmedText, display: "" }]);
        inputRef.current.value = "";
        localStorage.setItem("todos_count", count);
    };
    
    useEffect(() => {
        setTodos(JSON.parse(localStorage.getItem("todos")));
        count = localStorage.getItem('todos_count');
    }, [])

    useEffect(() => {
        setTimeout(() => {
            console.log(todos);
            localStorage.setItem("todos", JSON.stringify(todos));
        }, 100)
    }, [todos]);

    return (
        <div className='todo'>
            <div className="todo-header">   To-Do List </div>
            <div className="todo-add">
                <input type="text" ref={inputRef} className='todo-input' placeholder='Add a task' />
                <div onClick={() => { add() }} className="todo-add-btn" >ADD</div>
            </div>
            <div className="todo-list">
                {todos.map((item, index) => {
                    return <TodoItems key={index} setTodos={setTodos} no={item.no} display={item.display} text={item.text} />
                })}
            </div>
        </div>
    )
}

export default Todo
