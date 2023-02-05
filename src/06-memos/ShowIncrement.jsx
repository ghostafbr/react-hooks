import { memo } from 'react';

export const ShowIncrement = memo(({ increment }) => {
  console.log('Generated again :C');
  return (
    <button
      className='btn btn-primary'
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});
