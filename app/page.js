"use client"

import Form from "./componentes/todoform"
import { useState, useEffect } from "react";

export default function Home() {

/* 

  const [tarefas, setTarefas] = useState([]);
  const [filtro, setFiltro] = useState([]);

  useEffect(()=> {

    localStorage.setItem("tarefas", JSON.stringify(tarefas))
    const storedItems = JSON.parse(localStorage.getItem("items"))
    
  }, [tarefas])

  const tasks = [...tarefas];
  setFiltro()

  const onSelect = (selectedList) => {
    const tasks = [...tarefas]
    setFiltro(tasks)
}

  useEffect(() =>{
   
    
}, [tarefas]) */

   //console.log(tarefas) 

  return (
    <main >
    
      <div className="mx-auto text-center">

        <h1 className="text-3xl my-[30vh]">Bem-vindo à Home Page!</h1>

         {/* <Form
        tarefas={tarefas}
        setTarefas={setTarefas}
        filtro={filtro}
        setFiltro={setFiltro}
        /> */}
        
      </div>
    </main>
  )
}
