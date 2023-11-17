import { useState } from "react"
import { useTodoContext } from "../context/TodoProvider"
import TodoList from "./todo2"

const TodoForm = () =>{

    const {getNumberOfTodoItems, addTodo, todoList} = useTodoContext()
    const [todoItem, setTodoItem] = useState("")

const handleOnSubmit = (e) => {
    e.preventDefault();

    if (!todoItem){
        return;
    }
    //console.log(todoItem)
    addTodo({ nome: todoItem, status: false });
    setTodoItem("")
    //console.log("todo =>", todoItem)
}

    return(

        <form onSubmit={handleOnSubmit}>

            <input 
            className="text-black py-2 px-3"
            type="text" 
            value={todoItem} 
            onChange={e =>setTodoItem(e.target.value)} />

            <button className="px-4 py-2 bg-amber-500 mx-2" types="submit">Submit</button>

        </form>
    )
}

export default TodoForm;