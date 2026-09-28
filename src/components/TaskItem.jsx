import { useState } from 'react'

function TaskItem({ task, onToggle, onDelete, onEdit }) {
  const [isEditing, setIsEditing] = useState(false)
  const [editTitle, setEditTitle] = useState(task.title)

  function handleEdit() {
    if (editTitle.trim() === '') {
      return
    }

    onEdit(task.id, editTitle)
    setIsEditing(false)
  }

  return (
    <div className={`task-item ${task.completed ? 'completed' : ''}`}>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={editTitle}
            onChange={(event) => setEditTitle(event.target.value)}
          />

          <button onClick={handleEdit}>Save</button>
          <button onClick={() => setIsEditing(false)}>Cancel</button>
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