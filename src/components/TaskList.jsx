import { useContext } from "react"
import TaskCard from "./TaskCard"
import { TaskContext } from "../context/TaskContext"


function TaskList() {
    const {tasks} = useContext(TaskContext)
 if (tasks.length === 0) {
    return <h1 className='text-2xl font-bold text-white mb-3 text-center'>Sin tareas aun</h1>
 }
  return (
    <div className="grid grid-cols-4 gap-2">
     {/*  <h1>TaskList</h1> */}
      {tasks.map(
        (task)=>(
        <TaskCard key={task.id} task={task} />
        ) 
            
      )}
    </div>
  )
}

export default TaskList
