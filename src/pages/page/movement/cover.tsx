import Article from '@/components/article';
import useMedia, { MediaType } from '@/hooks/useMedia';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { MovementContext } from './config';
import './cover.less';
import { twMerge } from 'tailwind-merge';
import { IReactProps } from '@/settings/type';

let delay = 0;

const Image = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ scale: 0.6, x: -120 });

  useEffect(() => {
    if (inView) setStyle({ scale: 1, x: 0 }, { duration: 700 });
    else setStyle({ scale: 0.6, x: -120 }, 100);
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

const Paragraph = memo(({ children, inView }: IReactProps & { inView: boolean }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 20 });

  useEffect(() => {
    if (inView) {
      delay += 100;
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
    } else setStyle({ opacity: 0, y: 20 }, 100);
  }, [inView]);

  return <p style={style}>{children}</p>;
});

const Form = memo(({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 20 });

  useEffect(() => {
    if (inView) {
      delay += 100;
      setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
    } else setStyle({ opacity: 0, y: 20 }, 100);
  }, [inView]);

  return <div className='img' style={style} />;
});

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
            <div>
              <Paragraph inView={inView}>不只改變能源驅動，更重新定義移動成本</Paragraph>
              <Paragraph inView={inView}>
                立即試算，當您擁有<span> MG4</span>
              </Paragraph>
              <Paragraph inView={inView}></Paragraph>
              {device < MediaType.SM ? (
                <Paragraph inView={inView}>
                  一樣的行駛距離，能夠為您省下多少，創造更精采多元的生活
                </Paragraph>
              ) : (
                <>
                  <Paragraph inView={inView}>一樣的行駛距離，能夠為您省下多少</Paragraph>
                  <Paragraph inView={inView}>創造更精采多元的生活</Paragraph>
                </>
              )}
            </div>
            <div className='form'>
              <div>
                <Form inView={inView} />
              </div>
            </div>
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
                  disabled={state.mile === 0}
                  className={twMerge('btn-reCalc', state.mile === 0 ? 'opacity-30' : '')}
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
