import { memo } from 'react';
import { twMerge } from 'tailwind-merge';
import { SafetyConfig } from './config';

type ButtonProps = {
  data: (typeof SafetyConfig)[number];
  onClick: (index: number) => void;
  index: number;
  clickIndex: number | undefined;
};

const Button = memo(({ data, onClick, index, clickIndex }: ButtonProps) => {
  return (
    <div className='dot' style={{ top: `${data.top}%`, left: `${data.left}%` }}>
      <div className='relative h-full w-full rounded-full bg-white'>
        <div className='absolute left-full top-1/2 h-[1px] bg-white'>
          {index !== clickIndex && (
            <button
              onClick={() => onClick(index)}
              className={twMerge('btn', clickIndex === index ? 'on' : '')}
            >
              <div />
              <div>{data.name}</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

export default Button;
