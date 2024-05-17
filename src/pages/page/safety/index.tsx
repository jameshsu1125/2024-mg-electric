import { memo, useContext, useEffect, useRef, useState } from 'react';
import './index.less';
import { SafetyConfig } from './config';
import { CoverSize } from 'lesca-number';
import { ClientRect } from 'lesca-number/lib/type';
import { IoMdClose } from 'react-icons/io';
import useTween from 'lesca-use-tween';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';

type ButtonProps = {
  data: (typeof SafetyConfig)[number];
  onClick: (index: number) => void;
  index: number;
  clickIndex: number | undefined;
};

type DialogProps = {
  data: (typeof SafetyConfig)[number];
  onClick: () => void;
  index: number;
  clickIndex: number | undefined;
};

type DialogContextProps = Pick<DialogProps, 'data' | 'onClick'>;

const DialogContext = memo(({ onClick, data }: DialogContextProps) => {
  const x = window.innerWidth <= 430 ? -60 : 0;

  const [style, setStyle] = useTween({ x, opacity: 0, y: 50 });
  useEffect(() => {
    setStyle({ opacity: 1, y: 0 }, 800);
  }, []);

  return (
    <div className='relative h-full w-full' style={style}>
      <div className='absolute left-full top-1/2 h-[1px] w-5'>
        <div className='dialogContext'>
          <div>
            <h1>{data.title}</h1>
            <h2>{data.body}</h2>
            <button onClick={onClick}>
              <IoMdClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
});

const Dialog = memo(({ index, clickIndex, data, onClick }: DialogProps) => {
  return (
    <div
      className='absolute z-10 h-8 w-8 p-1'
      style={{ top: `${data.top}%`, left: `${data.left}%` }}
    >
      {index === clickIndex && <DialogContext data={data} onClick={onClick} />}
    </div>
  );
});

const Button = memo(({ data, onClick, index, clickIndex }: ButtonProps) => {
  return (
    <div className='dot' style={{ top: `${data.top}%`, left: `${data.left}%` }}>
      <div className='relative h-full w-full rounded-full bg-white'>
        <div className='absolute left-full top-1/2 h-[1px] bg-white'>
          {index !== clickIndex && (
            <button onClick={() => onClick(index)} className='btn'>
              <div />
              <div>{data.name}</div>
            </button>
          )}
        </div>
      </div>
    </div>
  );
});

const Safety = memo(() => {
  const ref = useRef<HTMLDivElement>(null);
  const [size, setSize] = useState<ClientRect>();

  const [context] = useContext(Context);
  const device = context[ActionType.Device];

  useEffect(() => {
    const resize = () => {
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

  const [clickIndex, setClickIndex] = useState<number | undefined>();

  return (
    <div ref={ref} className='Safety'>
      {size && (
        <div
          className='bg'
          style={{
            width: `${size?.width}px`,
            height: `${size?.height}px`,
            left: `${size?.left * (device === 'desktop' ? 2 : 1)}px`,
            top: `${size?.top}px`,
          }}
        >
          <div className='content'>
            {SafetyConfig.map((data, index) => (
              <Button
                key={data.name}
                data={data}
                onClick={(i) => {
                  setClickIndex(i);
                }}
                index={index}
                clickIndex={clickIndex}
              />
            ))}
          </div>
          <div className='content'>
            {SafetyConfig.map((data, index) => (
              <Dialog
                key={data.name}
                data={data}
                index={index}
                clickIndex={clickIndex}
                onClick={() => {
                  setClickIndex(undefined);
                }}
              />
            ))}
          </div>
        </div>
      )}
      <div className='headline'>
        <div>
          <span className='font-gillLight'>MSP</span>純電模組平台
          {device === 'desktop' ? ' ' : <br />}兼具空間與安全
        </div>
      </div>
    </div>
  );
});
export default Safety;
