import { useEffect, useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskFilter from '../components/TaskFilter'
import TaskList from '../components/TaskList'

function Home() {
  const [tasks, setTasks] = useState(() => {
    const savedTasks = localStorage.getItem('tasks')

    return savedTasks ? JSON.parse(savedTasks) : []
  })

  const [filter, setFilter] = useState('all')

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks])

  function addTask(newTask) {
    setTasks([...tasks, newTask])
  }

  function toggleTask(taskId) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, completed: !task.completed }
          : task
      )
    )
  }

  function deleteTask(taskId) {
    setTasks(tasks.filter((task) => task.id !== taskId))
  }

  function editTask(taskId, newTitle) {
    setTasks(
      tasks.map((task) =>
        task.id === taskId
          ? { ...task, title: newTitle }
          : task
      )
    )
  }

  const filteredTasks = tasks.filter((task) => {
    if (filter === 'active') {
      return !task.completed
    }

    if (filter === 'completed') {
      return task.completed
    }

    return true
  })

  return (
    <main className="home">
      <h1>My Tasks</h1>
      <p>Organize your daily tasks in one place.</p>

      <TaskForm onAddTask={addTask} />

      <TaskFilter
        filter={filter}
        onFilterChange={setFilter}
      />

     <p className="task-count">
  {tasks.filter((task) => !task.completed).length} remaining ·{' '}
  {tasks.filter((task) => task.completed).length} completed
</p>

      <TaskList
        tasks={filteredTasks}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onEdit={editTask}
      />
    </main>
  )
}

export default Home