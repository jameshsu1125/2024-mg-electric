import Article from '@/components/article';
import { IReactProps } from '@/settings/type';
import useTween from 'lesca-use-tween';
import { memo, useContext, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.less';
import { PageContext, PageStepType } from '../config';

let delay = 0;

const Image = ({ inView, step }: { inView: boolean; step: PageStepType }) => {
  const [style, setStyle] = useTween({ scale: 2, borderWidth: 50 });

  useEffect(() => {
    if (step >= PageStepType.allLoaded) {
      if (inView) setStyle({ scale: 1, borderWidth: 0 }, { duration: 5000 });
      else setStyle({ scale: 2, borderWidth: 50 }, 100);
    }
  }, [inView, step]);

  return (
    <div className='image'>
      <div style={{ transform: style.transform }} className='box' />
      <div
        style={{ borderWidth: `${style.borderWidth}px` }}
        className='absolute left-0 top-0 h-full w-full border-4 border-white'
      />
    </div>
  );
};

const H1 = ({ inView, step }: { inView: boolean; step: PageStepType }) => {
  const [style, setStyle] = useTween({ letterSpacing: '2rem' });

  useEffect(() => {
    if (step >= PageStepType.allLoaded) {
      if (inView) {
        delay = 0;
        setStyle({ letterSpacing: '0.2rem' }, { duration: 3000 });
      } else setStyle({ letterSpacing: '2rem' }, 100);
    }
  }, [inView, step]);

  return (
    <h1 style={style}>
      <span className='font-gillLight'>MG 100</span>年 純電元年
    </h1>
  );
};

const Paragraph = ({
  children,
  inView,
  step,
}: IReactProps & { inView: boolean; step: PageStepType }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 20 });

  useEffect(() => {
    if (step >= PageStepType.allLoaded) {
      if (inView) {
        delay += 100;
        setStyle({ opacity: 1, y: 0 }, { duration: 500, delay });
      } else setStyle({ opacity: 0, y: 20 }, 100);
    }
  }, [inView, step]);
  return <p style={style}>{children}</p>;
};

const Year = memo(() => {
  const [state] = useContext(PageContext);
  const [device, setDevice] = useState<'d' | 'm' | 'unset'>('unset');

  const { ref, inView } = useInView({
    threshold: 0,
  });

  useEffect(() => {
    const resize = () => {
      setDevice(window.innerWidth > 768 ? 'd' : 'm');
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div ref={ref} className='Year'>
      <div className='bg' />
      <Article>
        <Image inView={inView} step={state.step} />
        <div className='content'>
          <H1 inView={inView} step={state.step} />
          <Paragraph inView={inView} step={state.step}>
            百年來 MG 以不斷突破框架的先鋒者精神
            {device === 'd' ? '，' : <br />}
            致力於移動未來的創新，在車壇締造無數佳績
          </Paragraph>
          <Paragraph inView={inView} step={state.step}>
            隨時代推進，MG 在前瞻科技及綠能永續仍不遺餘力
            {device === 'd' ? '，' : <br />}
            以完善技術、普及化理念，推出世人期待的電動車款
          </Paragraph>
          <Paragraph inView={inView} step={state.step}>
            在全新時代，實現世界對純電生活的嚮往
          </Paragraph>
        </div>
      </Article>
    </div>
  );
});
export default Year;
