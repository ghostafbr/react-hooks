export const TodoItem = ({ todo, onRemovingTodo, onToggleTodo }) => {
  return (
    <>
      <li
        key={todo.id}
        className='list-group-item d-flex justify-content-between'
      >
        <span
          aria-label='span'
          className={`align-self-center ${
            todo.done ? 'text-decoration-line-through' : ''
          }`}
          onClick={() => onToggleTodo(todo.id)}
        >
          {todo.description}
        </span>
        <button
          className='btn btn-danger'
          onClick={() => onRemovingTodo(todo.id)}
        >
          Delete
        </button>
      </li>
    </>
  );
};
