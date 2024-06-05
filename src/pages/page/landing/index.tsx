import { IReactProps } from '@/settings/type';
import useTween, { Bezier } from 'lesca-use-tween';
import { memo, useContext, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { PageContext, PageStepType } from '../config';
import './index.less';

const Text = memo(
  ({
    children,
    inView,
    index,
    step,
  }: IReactProps & { inView: boolean; index: number; step: PageStepType }) => {
    const [style, setStyle] = useTween({ opacity: 0, y: 50 });

    useEffect(() => {
      if (step >= PageStepType.allLoaded) {
        if (inView) setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: index * 20 });
        else setStyle({ opacity: 0, y: 50 }, { duration: 100 });
      }
    }, [inView, step]);
    return <div style={style}>{children}</div>;
  },
);

const Headline = memo(({ inView, step }: { inView: boolean; step: PageStepType }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });

  useEffect(() => {
    if (step >= PageStepType.allLoaded) {
      if (inView) setStyle({ opacity: 1, y: 0 }, 500);
      else setStyle({ opacity: 0, y: 50 }, 100);
    }
  }, [inView, step]);

  return (
    <h1>
      <span style={style}>MG</span>
      {['純', '電', '指', '南'].map((txt, index) => (
        <Text inView={inView} key={txt} index={index} step={step}>
          {txt}
        </Text>
      ))}
    </h1>
  );
});

const Car = memo(({ inView, step }: { inView: boolean; step: PageStepType }) => {
  const [style, setStyle] = useTween({ opacity: 1, x: 200 });

  useEffect(() => {
    if (step >= PageStepType.allLoaded) {
      if (inView) {
        setStyle({ opacity: 1, x: 0 }, { duration: 500, easing: Bezier.outBack });
      } else setStyle({ opacity: 1, x: 200 }, 100);
    }
  }, [inView, step]);

  return (
    <div className='car'>
      <div className='png' style={style} />
    </div>
  );
});

const MG4 = memo(({ inView, step }: { inView: boolean; step: PageStepType }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 200 });

  useEffect(() => {
    if (step >= PageStepType.allLoaded) {
      if (inView)
        setStyle({ opacity: 1, y: 0 }, { duration: 700, delay: 100, easing: Bezier.inOutQuart });
      else setStyle({ opacity: 0, y: 200 }, 100);
    }
  }, [inView, step]);

  return (
    <div className='mg4'>
      <div style={style} className='svg' />
    </div>
  );
});

const Landing = memo(() => {
  const [state] = useContext(PageContext);

  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className='Landing'>
      <div className='bg' />
      <MG4 inView={inView} step={state.step} />
      <Car inView={inView} step={state.step} />
      <div className='headline'>
        <Headline inView={inView} step={state.step} />
      </div>
    </div>
  );
});
export default Landing;
