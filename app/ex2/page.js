"use client"

import Button from "../componentes/Button";
import { useState, useEffect } from "react";
import TodoProvider from "../context/TodoProvider";
import TodoList from "../componentes/todo2";
import TodoForm from "../componentes/todoform2";
import TodoFilter from "../componentes/todofilter2";

export default function Home2() {


  return (   
    <main >
      <TodoProvider>
      <div className="mx-auto text-center">
      <h3 className="font-semibold text-lg my-5">To Do List</h3>

        <TodoForm/>
        <TodoFilter/>
        <TodoList/>
        

        {/* <Button $primary>Botão Primary styled-components</Button>
        <Button>Botão Padrão styled-components</Button> */}
      </div> 
      </TodoProvider>
    </main>
  )
}