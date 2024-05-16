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
      <div className='absolute left-0 top-0 mt-20 h-full w-full'>
        <div className='w-full text-center text-5xl font-thin'>MSP純電模組平台 兼具空間與安全</div>
      </div>
    </div>
  );
});
export default Safety;
