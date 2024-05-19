import { memo, useContext, useEffect, useRef, useState } from 'react';
import './cover.less';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { twMerge } from 'tailwind-merge';
import { MovementContext } from './config';

const Left = memo(() => {
  const ref = useRef<HTMLInputElement>(null);
  const [context] = useContext(Context);
  const device = context[ActionType.Device];
  const [, setState] = useContext(MovementContext);
  const [scale, setScale] = useState(window.innerWidth <= 430 ? window.innerWidth / 450 : 1);

  useEffect(() => {
    const resize = () => {
      if (device === 'mobile' && window.innerWidth <= 430) {
        setScale(() => window.innerWidth / 450);
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div className='left'>
      <h1>
        試算純電生活
        <br />
        規劃更多精彩可能
      </h1>
      <p>
        不只改變能源驅動，更重新定義移動成本
        <br />
        立即試算，當您擁有 MG4
        <br />
        一樣的行駛距離，能夠為您省下多少
        {device === 'desktop' && <br />}
        創造更精采多元的生活
      </p>
      <div className='group' style={{ transform: `scale(${scale})` }}>
        <div
          className={twMerge(
            'flex flex-row justify-center space-x-4',
            device === 'desktop' ? 'w-full pt-16' : '',
          )}
        >
          <div className='ico' />
          <div className='label'>
            <input ref={ref} type='number' placeholder='輸入每日行駛里程(km)' />
          </div>
        </div>
        <div className='flex justify-center'>
          <button
            className='btn-calc'
            onClick={() => {
              if (ref.current) {
                setState((S) => ({ ...S, mile: parseInt(ref.current?.value || '0') }));
              }
            }}
          >
            <span>馬上試算</span>
            <div className='ico-light' />
          </button>
          <button
            className='btn-reCalc'
            onClick={() => {
              setState((S) => ({ ...S, mile: 0 }));
              if (ref.current) {
                ref.current.value = '';
              }
            }}
          >
            重新計算
          </button>
        </div>
      </div>
    </div>
  );
});

const Cover = memo(() => {
  return (
    <div className='Cover'>
      <Left />
      <div className='right'>
        <div className='img' />
      </div>
    </div>
  );
});
export default Cover;
