import { useForm } from '../hooks/useForm';

export const AddTodo = ({ onNewTodo }) => {
  const { handleNewTodo, description, onInputChange, onResetForm } = useForm({
    description: '',
  });

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    if (description.length <= 1) return;
    const newTodo = {
      id: new Date().getTime() * 3,
      description,
      done: false,
    };

    onNewTodo(newTodo);
    onResetForm();
  };

  return (
    <>
      <form onSubmit={onFormSubmit}>
        <input
          type='text'
          placeholder='What is there to do?'
          value={description}
          className='form-control'
          onChange={onInputChange}
          name='description'
        />

        <button
          type='submit'
          className='btn btn-outline-primary mt-2'
          onClick={handleNewTodo}
        >
          Add
        </button>
      </form>
    </>
  );
};
