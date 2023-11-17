import { createContext, useEffect } from "react";
import { useContext, useState } from "react";


const TodoContext = createContext();

const initialTodoListState = []

const  TodoProvider = ({children}) => {

    const [todoList, setTodoList] = useState(initialTodoListState)
    const [filterList, setFilterList] = useState(todoList)

    useEffect(() =>{

        setFilterList(todoList)

    }, [todoList])

    const getNumberOfTodoItems = () =>{
        todoList.length
    }

    const addTodo = (newTodoItem) =>{
        setTodoList([...todoList, newTodoItem])
    }

    const removeTodo = (todoIndex) =>{
        const newList = todoList.filter((_, index) => index != todoIndex);
        setTodoList(newList);
    }

    

    const completeTodo = (todoIndex) =>{
        
      //console.log("change status") 

      setTodoList(
        todoList.map((item, index)=>{
            if (index === todoIndex) {
                const updatedItem = { ...item, status: !item.status };
                console.log("Updated Status:", updatedItem.status);
                return updatedItem;
            }
            return item;
        })    
      )
    }
    
    const showAll = () => {
        setFilterList(todoList);
    }

    const showCompleted = () => {
        setFilterList(todoList)
        const completed = todoList.filter((f) => f.status === true);
    setFilterList(completed);
        
    }

    const showIncompleted = () =>{       
        setFilterList(todoList)
        const incompleted = todoList.filter((f) => f.status === false);
    setFilterList(incompleted);
    }

    const editTodoName = (todoIndex, newName) => {
        setTodoList(
          todoList.map((item, index) => {
            if (index === todoIndex) {
              const updatedItem = { ...item, nome: newName };
              //console.log("Updated Name:", updatedItem.nome);
              return updatedItem;
            }
            return item;
          })
        );
      };

    const contextValue = {
        todoList,
        filterList,
        getNumberOfTodoItems,
        addTodo,
        removeTodo,
        completeTodo,
        showAll,
        showCompleted,
        showIncompleted,
        editTodoName
    }

    return <TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
}

export const useTodoContext = () => useContext(TodoContext)

export default TodoProvider;