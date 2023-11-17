'use client'
import { useState, useEffect } from "react";
import ToDo from "./todo";

export default function Form ({tarefas, setTarefas, filtro, setFiltro}){

    const [searchQuery, setSearchQuery] = useState("");

    const adicionaTarefa = (e) => {

        e.preventDefault();
        setTarefas([...tarefas, {id: Math.floor(Math.random() * 1000),nome:e.target.tarefa.value, status:false}])
        e.target.reset();
        setSearchQuery("");
    }

    useEffect(() => {
        const filteredTarefas = tarefas.filter((tarefa) =>
        tarefa.nome.toLowerCase().includes(searchQuery.toLowerCase()));
        setFiltro(filteredTarefas)      
    }, [tarefas, searchQuery])

    return(
        <div>
        <h2 className="mt-4 mb-2">Pesquisa pela tarefa:</h2>
        <input className="py-2 px-6 mb-3 text-black" type="text" placeholder="Procurar tarefa..." value={searchQuery} onChange={(ev) => setSearchQuery(ev.target.value)}></input>
        <form onSubmit={adicionaTarefa}>
          <div className="font-semibold my-2">Adiciona aqui as tuas tarefas:</div>  
          <input className='py-2 px-3 text-black' type="text" name="tarefa" placeholder='Escreve aqui...'></input>
          <button className='mx-2 px-3 py-2 bg-slate-600' type="submit">Adicionar</button>
        </form>

        <ToDo tarefas={tarefas} setTarefas={setTarefas} filtro={filtro} setFiltro={setFiltro}/>
        </div>
    )
    
}