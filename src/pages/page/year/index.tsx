import Article from '@/components/article';
import Char from '@/components/char';
import useTween from 'lesca-use-tween';
import { memo, useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import './index.less';

const Image = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ scale: 1.1, borderWidth: 20 });

  useEffect(() => {
    if (inView) setStyle({ scale: 1, borderWidth: 0 }, { duration: 5000 });
    else setStyle({ scale: 1.1, borderWidth: 20 }, 100);
  }, [inView]);

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

const H1 = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ letterSpacing: '2rem' });

  useEffect(() => {
    if (inView) setStyle({ letterSpacing: '0.2rem' }, { duration: 5000 });
    else setStyle({ letterSpacing: '2rem' }, 100);
  }, [inView]);

  return (
    <h1 style={style}>
      <span className='font-gillLight'>MG 100</span>年 純電元年
    </h1>
  );
};

const Year = memo(() => {
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
        <Image inView={inView} />
        <div className='content'>
          <H1 inView={inView} />
          <p>
            {device && device === 'd' ? (
              <Char inView={inView}>
                百年來 MG 以不斷突破框架的先鋒者精神，致力於移動未來的創新，在車壇締造無數佳績
              </Char>
            ) : (
              <>
                <Char inView={inView}>百年來 MG 以不斷突破框架的先鋒者精神</Char>
                <br />
                <Char inView={inView}>致力於移動未來的創新，在車壇締造無數佳績</Char>
              </>
            )}
          </p>

          <p>
            {device && device === 'd' ? (
              <Char inView={inView}>
                隨時代推進，MG
                在前瞻科技及綠能永續仍不遺餘力，以完善技術、普及化理念，推出世人期待的電動車款
              </Char>
            ) : (
              <>
                <Char inView={inView}>隨時代推進，MG 在前瞻科技及綠能永續仍不遺餘力</Char>
                <br />
                <Char inView={inView}>以完善技術、普及化理念，推出世人期待的電動車款</Char>
              </>
            )}
          </p>
          <p>
            <Char inView={inView}>在全新時代，實現世界對純電生活的嚮往</Char>
          </p>
        </div>
      </Article>
    </div>
  );
});
export default Year;
