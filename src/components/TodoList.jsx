import { useCallback } from "react";
import { useState } from "react";
import TodoItem from "./TodoItem";
import {StyledForm} from './StyledComp';
import {StyledButton} from './StyledComp';
import {StyledInput} from './StyledComp';
import {StyledGrandDiv01} from './StyledComp';



const TodoList = () => {
    const [inputValue, setInputValue] = useState('')
    const [todos, setTodos] = useState([{toDo: 1, description: "Task number one"}, {toDo: 2, description: "Task number two"}])

const onChange = (event) => {
    const value = event.target.value
    setInputValue(value)
}
const addTodo = (event) => {
    event.preventDefault()   
    const todo = {
        toDo: todos.length + 1,
        description: inputValue
}

    setTodos((prevState) => [...prevState, todo])

    setInputValue('')
}
const removeTodo = useCallback((toDo) => {
    setTodos((prevState) => prevState.filter((todo) => todo.toDo !== toDo))
}, []) 

return (
    <StyledGrandDiv01 className="todos">

        <StyledForm onSubmit={addTodo} className='todo-form'>
            <StyledInput type="text" onChange={onChange} value={inputValue} />
            <StyledButton type='submit'>Add To Do</StyledButton>
        </StyledForm>

        
        {todos.map((todo) => (
            <TodoItem key={todo.toDo} toDo={todo.toDo} description={todo.description} action={removeTodo} />
        ))}


    </StyledGrandDiv01>
)
}

export default TodoList