import { fireEvent, render, screen } from '@testing-library/react';
import { TodoItem } from '../../src/08-useReducer/TodoItem';

describe('Tests in <TodoItem />', () => {
  const todo = {
    id: 1,
    description: 'Soul Stone',
    done: false,
  };

  const onRemoveTodoMock = jest.fn();
  const onToggleTodoMock = jest.fn();
  beforeEach(() => jest.clearAllMocks());

  test('should show pending todo to acomplish', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onRemoveTodoMock}
        onRemovingTodo={onRemoveTodoMock}
      />
    );

    const liElement = screen.getByRole('listitem');
    expect(liElement.className).toBe(
      'list-group-item d-flex justify-content-between'
    );
    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('align-self-center');
    expect(spanElement.className).not.toContain('text-decoration-line-through');
  });

  test('should show completed todo', () => {
    todo.done = true;
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemovingTodo={onRemoveTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    expect(spanElement.className).toContain('text-decoration-line-through');
  });

  test('should call ToggleTodo when clicked', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemovingTodo={onRemoveTodoMock}
      />
    );

    const spanElement = screen.getByLabelText('span');
    fireEvent.click(spanElement);

    expect(onToggleTodoMock).toHaveBeenCalledWith(todo.id);
  });

  test('should call RemoveTodo', () => {
    render(
      <TodoItem
        todo={todo}
        onToggleTodo={onToggleTodoMock}
        onRemovingTodo={onRemoveTodoMock}
      />
    );

    const remmoveButton = screen.getByRole('button');
    fireEvent.click(remmoveButton);

    expect(onRemoveTodoMock).toHaveBeenCalledWith(todo.id);
  });
});
