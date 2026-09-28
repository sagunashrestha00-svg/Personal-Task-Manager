function TaskFilter({ filter, onFilterChange, tasks }) {
  const allCount = tasks.length
  const activeCount = tasks.filter((task) => !task.completed).length
  const completedCount = tasks.filter((task) => task.completed).length

  return (
    <div className="task-filter">
      <button
        className={filter === 'all' ? 'active' : ''}
        onClick={() => onFilterChange('all')}
      >
        All ({allCount})
      </button>

      <button
        className={filter === 'active' ? 'active' : ''}
        onClick={() => onFilterChange('active')}
      >
        Active ({activeCount})
      </button>

      <button
        className={filter === 'completed' ? 'active' : ''}
        onClick={() => onFilterChange('completed')}
      >
        Completed ({completedCount})
      </button>
    </div>
  )
}

export default TaskFilter