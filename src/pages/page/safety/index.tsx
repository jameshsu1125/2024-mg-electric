import { memo, useEffect, useRef, useState } from 'react';
import './index.less';
import { SafetyConfig } from './config';
import { CoverSize } from 'lesca-number';
import { ClientRect } from 'lesca-number/lib/type';

type ButtonProps = {
  top: number;
  left: number;
  name: string;
};

const Button = memo(({ top, left, name }: ButtonProps) => {
  return (
    <button
      className='btn absolute z-10 h-8 w-8 rounded-full border border-white p-1'
      style={{ top: `${top}%`, left: `${left}%` }}
    >
      <div className='relative h-full w-full rounded-full bg-white'>
        <div className='absolute left-full top-1/2 h-[1px] w-5 bg-white'>
          <div className='relative left-full -mt-5 flex h-8 w-fit items-center justify-center overflow-hidden rounded-l-full rounded-r-full border border-white px-5'>
            <div className='bgColor absolute h-full w-full bg-[#6f7989] opacity-80 bg-blend-multiply' />
            <div className='relative w-full whitespace-nowrap text-sm text-white'>{name}</div>
          </div>
        </div>
      </div>
    </button>
  );
});

const Safety = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<ClientRect>();
  useEffect(() => {
    const resize = () => {
      // console.log(ref.current?.clientHeight, ref.current?.clientWidth);
      if (ref.current) {
        setSize(
          CoverSize(
            { width: 1920, height: 1423 },
            {
              width: ref.current.clientWidth,
              height: ref.current.clientHeight,
            },
          ),
        );
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  // console.log(size);

  return (
    <div ref={ref} className='Safety'>
      {size && (
        <div
          className='bg'
          style={{
            width: `${size?.width}px`,
            height: `${size?.height}px`,
            left: `${size?.left}px`,
            top: `${size?.top}px`,
          }}
        >
          <div className='absolute left-1/2 top-1/2 h-full w-full'>
            {SafetyConfig.map((config) => (
              <Button key={config.name} top={config.top} left={config.left} name={config.name} />
            ))}
          </div>
        </div>
      )}
      <div className='absolute left-0 top-0 mt-20 h-full w-full'>
        <div className='w-full text-center text-5xl font-thin'>MSP純電模組平台 兼具空間與安全</div>
      </div>
    </div>
  );
});
export default Safety;
