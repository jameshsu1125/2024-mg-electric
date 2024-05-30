import Article from '@/components/article';
import { Fragment, memo, useContext, useEffect, useMemo, useState } from 'react';
import { LifeCarousel, LifeContext } from './config';
import './slide.less';

const base = process.env.NODE_ENV === 'development' ? './' : 'https://mg4electric.netlify.app/';

const Slide = memo(({ index, data }: { index: number; data: (typeof LifeCarousel)[number] }) => {
  const [device, setDevice] = useState<'m' | 'd' | 'unset'>('unset');

  const [state] = useContext(LifeContext);

  useEffect(() => {
    const resize = () => {
      setDevice(window.innerWidth > 768 ? 'd' : 'm');
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  useEffect(() => {
    if (state.index === index) {
      // console.log('current slide:', index);
    }
  }, [state, index]);

  const body = useMemo(() => {
    switch (device) {
      case 'unset':
        return null;
      case 'm':
        return (
          <p className='m'>
            {data.body.map((node) => (
              <Fragment key={`${JSON.stringify(node)}${index}`}>{node}</Fragment>
            ))}
          </p>
        );
      default:
        return (
          <div>
            {data.body.map((text, index) => (
              <p key={`${JSON.stringify(text)}${index}`}>{text}</p>
            ))}
          </div>
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
                <div className={`video v${index}`}>
                  <div className='absolute bottom-0 left-0 right-0 top-0'>
                    <video autoPlay loop muted playsInline>
                      <source src={`${base}video/${index}.mp4`} type='video/mp4' />
                    </video>
                  </div>
                </div>
              </div>
            </div>
            <div className='content'>
              <div className='headline'>
                <h1>{data.headline}</h1>
                <h2>{data.subline}</h2>
              </div>
              <div className='body'>
                {body}
                {data.postscript && <div className='ps'>{data.postscript}</div>}
              </div>
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Slide;
