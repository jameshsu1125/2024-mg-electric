import Article from '@/components/article';
import { memo, useEffect } from 'react';
import { BatteryExtremeTesting } from './config';
import './section2.less';
import useTween from 'lesca-use-tween';
import { useInView } from 'react-intersection-observer';

const H1 = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ letterSpacing: '2rem' });

  useEffect(() => {
    if (inView) setStyle({ letterSpacing: '0.1rem' }, { duration: 5000 });
    else setStyle({ letterSpacing: '2rem' }, 100);
  }, [inView]);

  return (
    <h1 style={style}>
      通過<span>5+1</span>極端條件測試
    </h1>
  );
};

const Section2 = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0,
  });
  return (
    <section ref={ref} className='Section-2'>
      <Article expend>
        <div className='headline'>
          <H1 inView={inView} />
        </div>
        <div className='content'>
          {BatteryExtremeTesting.map((data) => (
            <div className='ctx' key={data.title}>
              <div className='item'>
                <h2>{data.title}</h2>
                <p>{data.body}</p>
              </div>
            </div>
          ))}
        </div>
      </Article>
    </section>
  );
});
export default Section2;
