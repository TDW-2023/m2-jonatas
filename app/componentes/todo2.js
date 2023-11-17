import { useTodoContext } from "../context/TodoProvider";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons";
import { useState } from "react";


 const TodoList = () => {

    const {todoList, removeTodo, completeTodo, filterList, editTodoName} = useTodoContext();

    const [editIndex, setEditIndex] = useState(null);
    const [editName, setEditName] = useState("");


    const handleEditName = (index, currentName) => {
      setEditIndex(index);
      setEditName(currentName);
    };
  
    const handleSaveEdit = (index) => {
      editTodoName(index, editName);
      setEditIndex(null);
    };

    document.title = todoList.length + " tarefa(s) por fazer";

    return (
        <div className="mt-5">
             
          <p>Number of ToDo's: {todoList.length}</p>
          <ul className="text-white mt-4 mx-auto text-center">
            {filterList.map((todo, index) => (
              <div key={index} className={`w-[320px] mx-auto px-4 py-2 my-2 ${todo.status ? "outline-green-600 bg-green-600" : "outline-slate-500 bg-teal-600"}`}>
                <li className="my-2 flex justify-between text-center mx-auto">
                  <div className="mx-3">
                    {editIndex === index ? (
                      <input className="text-black"
                        type="text"
                        value={editName}
                        onChange={(e) => setEditName(e.target.value)}
                      />
                    ) : (
                      <span>{todo.nome}</span>
                    )}
                  </div>
                  <div>
                    <button onClick={() => removeTodo(index)}>
                      <FontAwesomeIcon icon={faCircleXmark} style={{ color: "red" }} className="text-lg mx-3" />
                    </button>
                    <button onClick={() => completeTodo(index)}>
                      <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#3bc309" }} className="text-lg mx-3" />
                    </button>
                    {editIndex === index ? (
                      <button onClick={() => handleSaveEdit(index)}>Save</button>
                    ) : (
                      <button id="edit" onClick={() => handleEditName(index, todo.nome)}>
                        Edit
                      </button>
                    )}
                  </div>
                </li>
              </div>
            ))}
          </ul>
        </div>
      );

}

export default TodoList;