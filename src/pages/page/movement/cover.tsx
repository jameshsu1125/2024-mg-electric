import Article from '@/components/article';
import useMedia, { MediaType } from '@/hooks/useMedia';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MovementContext } from './config';
import './cover.less';
import Char from '@/components/char';

let delay = 0;

const Image = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ scale: 0.6, x: -200 });

  useEffect(() => {
    if (inView) setStyle({ scale: 1, x: 0 }, { duration: 1500 });
    else setStyle({ scale: 0.6, x: -200 }, 100);
  }, [inView]);
  return <div style={style} className='image' />;
};

const H1 = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ letterSpacing: '2rem' });

  useEffect(() => {
    if (inView) setStyle({ letterSpacing: '0.2rem' }, { duration: 5000 });
    else setStyle({ letterSpacing: '2rem' }, 100);
  }, [inView]);

  return (
    <h1 style={style}>
      試算純電生活
      <br />
      規劃更多精彩可能
    </h1>
  );
};

const Cover = memo(() => {
  const refInput = useRef<HTMLInputElement>(null);
  const [device] = useMedia();
  const [state, setState] = useContext(MovementContext);
  const [once, setOnce] = useState(false);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    if (inView) delay = 0;
  }, [inView]);

  useEffect(() => {
    if (refInput.current && state.mile === 0) {
      if (!once) {
        setOnce(true);
        return;
      }
      refInput.current.value = '';
    }
  }, [state.mile, once]);

  return (
    <div ref={ref} className='Cover'>
      <Article>
        <div className='content'>
          <div className='left'>
            <H1 inView={inView} />
            <p>
              <Char inView={inView} delay={(delay += 100)}>
                不只改變能源驅動，更重新定義移動成本
              </Char>
              <br />
              <Char inView={inView} delay={(delay += 100)}>
                立即試算，當您擁有 MG4
              </Char>
              <br />
              {device < MediaType.SM ? (
                <Char inView={inView} delay={(delay += 100)}>
                  一樣的行駛距離，能夠為您省下多少，創造更精采多元的生活
                </Char>
              ) : (
                <>
                  <Char inView={inView} delay={(delay += 100)}>
                    一樣的行駛距離，能夠為您省下多少
                  </Char>
                  <br />
                  <Char inView={inView} delay={(delay += 100)}>
                    創造更精采多元的生活
                  </Char>
                </>
              )}
            </p>
            <div className='group'>
              <div className='row'>
                <div className='ico' />
                <div className='input'>
                  <input
                    ref={refInput}
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
                    if (refInput.current) {
                      setState((S) => ({ ...S, mile: parseInt(refInput.current?.value || '0') }));
                    }
                  }}
                >
                  馬上試算
                </button>
                <button
                  className='btn-reCalc'
                  onClick={() => {
                    setState((S) => ({ ...S, mile: 0 }));
                    if (refInput.current) {
                      refInput.current.value = '';
                    }
                  }}
                >
                  重新計算
                </button>
              </div>
            </div>
          </div>
          <div className='right'>
            <Image inView={inView} />
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Cover;
