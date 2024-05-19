import Article from '@/components/article';
import { memo, useEffect, useMemo, useState } from 'react';
import { LifeCarousel } from './config';
import './slide.less';

const Slide = memo(({ index, data }: { index: number; data: (typeof LifeCarousel)[number] }) => {
  const [device, setDevice] = useState<'m' | 'd' | 'unset'>('unset');

  useEffect(() => {
    const resize = () => {
      setDevice(window.innerWidth > 768 ? 'd' : 'm');
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const body = useMemo(() => {
    switch (device) {
      case 'unset':
        return null;
      case 'm':
        return <p>{data.body.join('')}</p>;
      default:
        return (
          <p>
            {data.body.map((text) => (
              <span key={text}>{text}</span>
            ))}
          </p>
        );
    }
  }, [data.body, device]);

  return (
    <div className='flex w-full'>
      <Article>
        <div className='Slide'>
          <div className='slick'>
            <div className='m-headline'>
              <h1>{data.headline}</h1>
              <h2>{data.subline}</h2>
            </div>
            <div className='image'>
              <div className='ctx'>
                <div className={`video v${index}`}></div>
              </div>
            </div>
            <div className='content'>
              <div className='headline'>
                <h1>{data.headline}</h1>
                <h2>{data.subline}</h2>
              </div>
              <div className='body'>
                {body}
                {data.postscript !== '' && <div className='ps'>{data.postscript}</div>}
              </div>
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Slide;
