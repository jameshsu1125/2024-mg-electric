import { memo, useState } from 'react';
import { MovementContext, MovementState } from './config';
import Cover from './cover';
import Form from './form';
import './index.less';
import Result from './result';

const Movement = memo(() => {
  const value = useState(MovementState);

  return (
    <div className='Movement'>
      <MovementContext.Provider value={value}>
        <Cover />
        <Result />
        <Form />
      </MovementContext.Provider>
    </div>
  );
});
export default Movement;
