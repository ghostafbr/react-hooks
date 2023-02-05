import { useEffect, useState } from 'react';
import { Message } from './Message';

export const SimpleForm = () => {
  const [formState, setFormState] = useState({
    username: 'Ghostafbr',
    email: 'ghostafbr@gmail.com',
  });

  const { username, email } = formState;

  const onInputChange = ({ target }) => {
    const { name, value } = target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  useEffect(() => {
    // console.log('UseEffect called!');
  }, []);

  useEffect(() => {
    // console.log('formState Changed!');
  }, [formState]);

  useEffect(() => {
    // console.log('Email Changed!');
  }, [email]);

  return (
    <>
      <h1>Simple Form</h1>
      <hr />

      <input
        type='text'
        className='form-control'
        placeholder='Username'
        name='username'
        value={username}
        onChange={onInputChange}
      />

      <input
        type='email'
        className='form-control mt-2'
        placeholder='ghostafbr@gmail.com'
        name='email'
        value={email}
        onChange={onInputChange}
      />

      {username === 'Ghostafbr2' && <Message />}
    </>
  );
};
