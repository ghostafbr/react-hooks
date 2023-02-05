import { useTodos } from '../hooks/useTodos';
import { AddTodo } from './AddTodo';
import { TodoList } from './TodoList';

export const TodoApp = () => {
  const {
    todos,
    todosCount,
    earrings,
    handleNewTodo,
    handleRemoveTodo,
    handleToggleTodo,
  } = useTodos();
  return (
    <>
      <h1>
        TodoApp: {todosCount} / <small>Earrings: {earrings}</small>
      </h1>
      <hr />
      <div className='row'>
        <div className='col-7'>
          <TodoList
            todos={todos}
            onRemovingTodo={handleRemoveTodo}
            onToggleTodo={handleToggleTodo}
          />
        </div>
        <div className='col-5'>
          <h4> Add TODO</h4>
          <hr />
          <AddTodo onNewTodo={handleNewTodo} />
        </div>
      </div>
    </>
  );
};
