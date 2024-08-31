import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'


function App() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <div className='container mx-auto p-10'>
    {/* <h1> Hola Matthew...</h1> */}
    <TaskForm />
    <TaskList />
      </div>
    </main>
  )
}

export default App
