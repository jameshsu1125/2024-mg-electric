import { memo, useEffect } from 'react';
import './index.less';
import { useInView } from 'react-intersection-observer';
import useTween from 'lesca-use-tween';
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

const Landing = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.7,
  });

  return (
    <div ref={ref} className='Landing'>
      <div className='bg' />
      <div className='headline'>
        <Headline inView={inView} />
      </div>
    </div>
  );
});
export default Landing;
