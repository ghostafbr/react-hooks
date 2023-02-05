import { memo } from 'react';

export const Small = memo(({ value }) => {
  console.log('Generated again');

  return <small>{value}</small>;
});
