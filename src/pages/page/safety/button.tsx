import { memo, useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { SafetyConfig } from './config';
import useTween, { Bezier } from 'lesca-use-tween';

type ButtonProps = {
  data: (typeof SafetyConfig)[number];
  onClick: (index: number) => void;
  index: number;
  clickIndex: number | undefined;
  inView: boolean;
};

const CurrentButton = ({ onClick, index, clickIndex, data, inView }: ButtonProps) => {
  const [style, setStyle] = useTween({ opacity: 0, x: -10 });
  useEffect(() => {
    if (inView) setStyle({ opacity: 1, x: 0 }, 500);
    else setStyle({ opacity: 0, x: -10 }, 100);
  }, [inView]);

  return (
    <button
      style={style}
      onClick={() => onClick(index)}
      className={twMerge('btn', clickIndex === index ? 'on' : '')}
    >
      <div />
      <div>{data.name}</div>
    </button>
  );
};

const Button = memo(({ data, onClick, index, clickIndex, inView }: ButtonProps) => {
  const [animated, setAnimated] = useState(false);

  const [style, setStyle] = useTween({ opacity: 0, scale: 0 });
  const [width, setWidth] = useTween({ width: '0px' });

  useEffect(() => {
    if (inView) {
      setAnimated(false);
      setStyle(
        { opacity: 1, scale: 1 },
        { duration: 800, easing: Bezier.outBack, delay: 200 * index },
      );
      setWidth(
        { width: window.innerWidth < 768 ? '12px' : '20px' },
        {
          duration: 800,
          easing: Bezier.outBack,
          delay: 600 + 100 * index,
          onEnd: () => setAnimated(true),
        },
      );
    } else {
      setStyle({ opacity: 0, scale: 0 }, 100);
      setWidth({ width: 0 }, 100);
    }
  }, [inView]);

  return (
    <div style={{ ...style, top: `${data.top}%`, left: `${data.left}%` }} className='dot'>
      <div className='relative h-full w-full rounded-full bg-white'>
        <div className='absolute left-full top-1/2 h-[1px] bg-white' style={width}>
          {animated && index !== clickIndex && (
            <CurrentButton
              index={index}
              clickIndex={clickIndex}
              data={data}
              onClick={onClick}
              inView={inView}
            />
          )}
        </div>
      </div>
    </div>
  );
});

export default Button;
