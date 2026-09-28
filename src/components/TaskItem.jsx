import { useState } from 'react'

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)
  const [error, setError] = useState('')

  function handleEdit() {
    const trimmedTitle = editTitle.trim()

    if (trimmedTitle === '') {
      setError('Task title cannot be empty.')
      return
    }

    onEdit(task.id, trimmedTitle)
    setIsEditing(false)
    setError('')
  }

  function handleEditTitleChange(event) {
    setEditTitle(event.target.value)

    if (error) {
      setError('')
    }
  }

  function handleCancel() {
    setEditTitle(task.title)
    setError('')
    setIsEditing(false)
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={handleEditTitleChange}
          />

          <button onClick={handleEdit}>Save</button>
          <button onClick={handleCancel}>Cancel</button>

          {error && <p className="form-error">{error}</p>}
        </div>
      ) : (
        <>
          <div>
            <h3>{task.title}</h3>
            <span>{task.category}</span>
          </div>

          <div className="task-actions">
            <button onClick={() => onToggle(task.id)}>
              {task.completed ? 'Undo' : 'Complete'}
            </button>

            <button onClick={() => setIsEditing(true)}>
              Edit
            </button>

            <button onClick={() => onDelete(task.id)}>
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  )
}

export default TaskItem