import { memo, useContext, useEffect, useRef, useState } from 'react';
import './cover.less';
import Article from '@/components/article';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { MovementContext } from './config';

const Cover = memo(() => {
  const ref = useRef<HTMLInputElement>(null);
  const [device] = useMedia();
  const [state, setState] = useContext(MovementContext);
  const [once, setOnce] = useState(false);

  useEffect(() => {
    if (ref.current && state.mile === 0) {
      if (!once) {
        setOnce(true);
        return;
      }
      ref.current.value = '';
    }
  }, [state.mile, once]);

  return (
    <div className='Cover'>
      <Article>
        <div className='content'>
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
              {device < MediaType.SM ? '，' : <br />}
              創造更精采多元的生活
            </p>
            <div className='group'>
              <div className='row'>
                <div className='ico' />
                <div className='input'>
                  <input
                    ref={ref}
                    type='number'
                    maxLength={3}
                    max={999}
                    min={1}
                    placeholder='輸入每日行駛里程(km)'
                    onChange={(e) => {
                      e.target.value = Math.min(
                        Number(e.target.value.replace(/\D/g, '')),
                        999,
                      ).toString();
                    }}
                  />
                </div>
              </div>
              <div className='row'>
                <button
                  className='btn-calc'
                  onClick={() => {
                    if (ref.current) {
                      setState((S) => ({ ...S, mile: parseInt(ref.current?.value || '0') }));
                    }
                  }}
                >
                  馬上試算
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
          <div className='right'>
            <div className='image' />
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Cover;
