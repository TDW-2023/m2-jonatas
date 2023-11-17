"use client"

import Form from "../componentes/todoform";
import { useState, useEffect } from "react";


export default function Home() {

  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState([]);

  useEffect(()=> {

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    const storedItems = JSON.parse(localStorage.getItem("items"))
    
  }, [tarefas])

  document.title = "Ex1"

  return (
    <main >
      <div className="mx-auto text-center">

        <Form
        tarefas={tarefas}
        setTarefas={setTarefas}
        filtro={filtro}
        setFiltro={setFiltro}
        />
        
      </div>
    </main>
  )
}