import React, {createContext, useEffect, useState} from 'react'
import {tasks as data} from '../data/tasks'

export const TaskContext = createContext() //nombre contexto

export function TaskContextProvider(props) {
  const [tasks, setTasks] = useState([])

  function createTask(task) {
    setTasks([...tasks, {
      id: tasks.length + 1,
      title: task.title,
      description: task.description,
      status: false,
    }])
}

function deleteTask(taskId) {
  setTasks(tasks.filter(
    task => task.id !== taskId
  ))
}
useEffect(() => {
  setTasks(data)
}, [])
  return (
   <TaskContext.Provider value={{
    tasks,
     createTask, 
     deleteTask
   }
   }>
    {props.children}
   </TaskContext.Provider>
  )
}// Funcion proveedora contexto


