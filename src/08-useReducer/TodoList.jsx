import { TodoItem } from './TodoItem';

export const TodoList = ({ todos = [], onRemovingTodo, onToggleTodo }) => {
  return (
    <>
      <ul className='list-group'>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onRemovingTodo={onRemovingTodo}
            onToggleTodo={onToggleTodo}
          />
        ))}
      </ul>
    </>
  );
};
