import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Personal')

  function handleSubmit(event) {
    event.preventDefault()

    if (title.trim() === '') {
      return
    }

    const newTask = {
      id: Date.now(),
      title: title,
      category: category,
      completed: false,
    }

    onAddTask(newTask)

    setTitle('')
    setCategory('Personal')
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      />

      <select
        value={category}
        onChange={(event) => setCategory(event.target.value)}
      >
        <option value="Personal">Personal</option>
        <option value="College">College</option>
        <option value="Work">Work</option>
        <option value="Other">Other</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  )
}

export default TaskForm