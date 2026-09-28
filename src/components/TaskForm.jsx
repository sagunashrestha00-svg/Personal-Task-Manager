import { useState } from 'react'

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('Personal')
  const [error, setError] = useState('')

  function handleSubmit(event) {
    event.preventDefault()

    const trimmedTitle = title.trim()

    if (trimmedTitle === '') {
      setError('Please enter a task before adding it.')
      return
    }

    const newTask = {
      id: Date.now(),
      title: trimmedTitle,
      category,
      completed: false,
    }

    onAddTask(newTask)

    setTitle('')
    setCategory('Personal')
    setError('')
  }

  function handleTitleChange(event) {
    setTitle(event.target.value)

    if (error) {
      setError('')
    }
  }

  return (
    <form className="task-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter a task..."
        value={title}
        onChange={handleTitleChange}
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

      {error && <p className="form-error">{error}</p>}
    </form>
  )
}

export default TaskForm