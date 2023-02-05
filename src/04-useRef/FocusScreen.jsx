import { useRef } from 'react';

export const FocusScreen = () => {
  const inputRef = useRef();

  const onClick = () => {
    /* document.querySelector('input').select(); */
    // console.log(inputRef);
    inputRef.current.select();
  };

  return (
    <>
      <h1>FocusScreen</h1>

      <input
        ref={inputRef}
        type='text'
        className='form-control'
        placeholder='Put your name here'
      />

      <button className='btn btn-primary mt-2' onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
