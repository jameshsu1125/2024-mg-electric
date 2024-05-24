import { memo, useEffect } from 'react';
import './index.less';
import { useInView } from 'react-intersection-observer';
import useTween, { Bezier } from 'lesca-use-tween';
import { IReactProps } from '@/settings/type';

const Text = memo(
  ({ children, inView, index }: IReactProps & { inView: boolean; index: number }) => {
    const [style, setStyle] = useTween({ opacity: 0, y: 50 });

    useEffect(() => {
      if (inView) setStyle({ opacity: 1, y: 0 }, { duration: 500, delay: index * 100 });
      else setStyle({ opacity: 0, y: 50 }, { duration: 100 });
    }, [inView]);
    return <div style={style}>{children}</div>;
  },
);

const Headline = memo(({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 50 });

  useEffect(() => {
    if (inView) setStyle({ opacity: 1, y: 0 }, 500);
    else setStyle({ opacity: 0, y: 50 }, 100);
  }, [inView]);

  return (
    <h1>
      <span style={style}>MG</span>
      {['純', '電', '生', '活', '指', '南', ''].map((txt, index) => (
        <Text inView={inView} key={txt} index={index}>
          {txt}
        </Text>
      ))}
    </h1>
  );
});

const Car = memo(({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ opacity: 1, x: 200 });

  useEffect(() => {
    if (inView) setStyle({ opacity: 1, x: 0 }, { duration: 500, easing: Bezier.outBack });
    else setStyle({ opacity: 1, x: 200 }, 100);
  }, [inView]);

  return (
    <div className='car'>
      <div className='png' style={style} />
    </div>
  );
});

const MG4 = memo(({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ opacity: 0, y: 200 });

  useEffect(() => {
    if (inView)
      setStyle({ opacity: 1, y: 0 }, { duration: 700, delay: 100, easing: Bezier.inOutQuart });
    else setStyle({ opacity: 0, y: 200 }, 100);
  }, [inView]);

  return (
    <div className='mg4'>
      <div style={style} className='svg' />
    </div>
  );
});

const Landing = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0,
  });

  return (
    <div ref={ref} className='Landing'>
      <div className='bg' />
      <MG4 inView={inView} />
      <Car inView={inView} />
      <div className='headline'>
        <Headline inView={inView} />
      </div>
    </div>
  );
});
export default Landing;
