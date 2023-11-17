import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleXmark } from "@fortawesome/free-regular-svg-icons"
import { faPenToSquare } from "@fortawesome/free-regular-svg-icons"
import { faCircleCheck } from "@fortawesome/free-regular-svg-icons"
import Filter from "./todolistfilter"
//import { PropTypes } from 'prop-types';

export default function ToDo({tarefas, setTarefas, filtro, setFiltro}){

const numberOfTarefas = tarefas ? tarefas.length : 0;

const eliminaTarefa = ({id}) => {
    //cria um novo array que inclui todas as tarefas do array original, exceto aquela que possui o mesmo id que o id passado como argumento para a função eliminaTarefa
    setTarefas(tarefas.filter((tarefa) => tarefa.id !== id))
}

const completaTarefa = (tarefa) => {
    setTarefas(
        tarefas.map((item)=>{
            if(item.id===tarefa.id){
                return{...item, status: !item.status} //experimentei true, mas depois teria de executar outra função para retirar o true, ent este anula o outro
            }
            return item;
        })
    )
}

return(

<div className="flex flex-col text-center mx-auto my-3 w-[500px]">
<p className="my-2">{numberOfTarefas} tarefas na lista</p>

<Filter tarefas={tarefas} setTarefas={setTarefas} filtro={filtro} setFiltro={setFiltro}/>

<h4 className="mt-4 mb-2">Tarefas:</h4>

{filtro.map((tarefa) => (
    
    <div className={`flex justify-between my-3 px-3 py-4 outline outline-1 outline-slate-500 ${ tarefa.status ? "outline-green-400 bg-green-950" : "outline-slate-500"}`} key={tarefa.id}>
        
        <div>{tarefa.nome}</div>
        <div className="flex self-center items-center">
        <div className="mx-2"><button onClick={() => eliminaTarefa(tarefa)}><FontAwesomeIcon icon={faCircleXmark} style={{color: "red"}} className="text-lg" /></button></div>
        <div className="mx-2"><button><FontAwesomeIcon icon={faPenToSquare} style={{color: "#ffae00",}} className="text-lg"/></button></div>
        <div className="mx-2"><button onClick={() => completaTarefa(tarefa)}><FontAwesomeIcon icon={faCircleCheck} style={{color: "#3bc309",}} className="text-lg"  /></button></div>
        </div>
        
    </div>
))}

</div>
)
}

/* ToDo.propTypes = {
    tarefas: PropTypes.array.isRequired,
    setTarefas: PropTypes.func.isRequired,
    filtro: PropTypes.array.isRequired,
    setFiltro: PropTypes.func.isRequired,
  }; */