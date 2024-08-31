import React, { useContext } from 'react'
import { TaskContext } from '../context/TaskContext'

function TaskCard({task}) {
  const {deleteTask} = useContext(TaskContext)
  /* function mostraralert(id) {
    alert(' Seguro quieres eliminar la tarea? ' + task.id)
  } */
  return (
    <div className='bg-gray-800 text-white p-4 rounded-md'>
        <h1 className='text-xl font-bold capitalize'>Tarea :  {task.title}</h1>
        <h2 className='text-gray-500 text-sm'> {task.id}</h2>
        <h2 className='text-gray-500 text-sm'> {task.description}</h2>
        <h2 className='text-gray-500 text-sm'> {task.status}</h2>
        <button onClick={()=>{ deleteTask(task.id)}}
          className='bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400'> Elimiar tarea</button>
        </div>
  )
}

export default TaskCard
