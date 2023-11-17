import { useEffect, useState } from "react";

const Filter = ({tarefas, setTarefas, filtro, setFiltro}) => {

const mostraTarefas = ({tarefas}) =>{
        setFiltro(tarefas)
}

const mostraCompletas = ({tarefas, filtro}) =>{
        
        /* setFiltro(tarefas)
        if(filtro==tarefas){
            setFiltro(filtro.filter((filtrado) => filtrado.status == true));
        }   */
        const completas = tarefas.filter((filtrado) => filtrado.status === true);
    setFiltro(completas);
}

    const mostraIncompletas = ({tarefas, filtro}) => {

        const incompletas = tarefas.filter((filtrado) => filtrado.status === false);
    setFiltro(incompletas);
        
        /* setFiltro(tarefas)
        if(filtro==tarefas){
            setFiltro(filtro.filter((filtrado) => filtrado.status == false));
        }  */
    /* filtro.map((e)=>{
        setFiltro(filtro.filter((filtrado) => filtrado.status === false))  
    }) */  
}

    return(
        <div className="flex mx-auto">
            <button className="bg-slate-800 px-2 py-1 mx-2" onClick={() => mostraTarefas({tarefas})}>Todas</button>
            <button className="bg-slate-800 px-2 py-1 mx-2" onClick={() => mostraCompletas({tarefas, filtro})}>Completas</button>
            <button className="bg-slate-800 px-2 py-1 mx-2" onClick={() => mostraIncompletas({tarefas, filtro})}>Incompletas</button>   
        </div>
    )
}

export default Filter;