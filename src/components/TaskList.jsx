import TaskItem from './TaskItem'

function TaskList({ tasks, onToggle, onDelete, onEdit, hasTasks }) {
  if (tasks.length === 0) {
    return (
      <div className="no-tasks">
        {hasTasks ? (
          <>
            <h3>No matching tasks</h3>
            <p>Try changing the filter to see your other tasks.</p>
          </>
        ) : (
          <>
            <h3>No tasks yet</h3>
            <p>Add your first task to get started.</p>
          </>
        )}
      </div>
    )
  }

  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDelete}
          onEdit={onEdit}
        />
      ))}
    </div>
  )
}

export default TaskList