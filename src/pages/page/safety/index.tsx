import { memo, useEffect } from 'react';
import './index.less';

type ButtonProps = {
  top: number;
  left: number;
};

const Button = memo(({ top, left }: ButtonProps) => {
  return (
    <div
      className='absolute h-5 w-5 rounded-full bg-red-500'
      style={{ top: `${top}%`, left: `${left}%` }}
    >
      a
    </div>
  );
});

const Safety = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Safety'>
      <div className='bg'>
        <Button top={10} left={10} />
      </div>
    </div>
  );
});
export default Safety;
