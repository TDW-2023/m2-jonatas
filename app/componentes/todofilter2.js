import { useTodoContext } from "../context/TodoProvider";


const TodoFilter = () => {

const {todoList, filterList, showAll, showCompleted, showIncompleted} = useTodoContext();
return (
    <div className="flex justify-center mx-auto mt-3">
      <button className="bg-slate-800 px-2 py-1 mx-2" onClick={showAll}>
        Todas
      </button>
      <button className="bg-slate-800 px-2 py-1 mx-2" onClick={showCompleted}>
        Completas
      </button>
      <button className="bg-slate-800 px-2 py-1 mx-2" onClick={showIncompleted}>
        Incompletas
      </button>
    </div>
  );

}

export default TodoFilter;