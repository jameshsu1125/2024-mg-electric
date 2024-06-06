import Article from '@/components/article';
import { Fragment, memo, useContext, useEffect, useMemo, useState } from 'react';
import { LifeCarousel, LifeContext } from './config';
import './slide.less';

const Slide = memo(({ index, data }: { index: number; data: (typeof LifeCarousel)[number] }) => {
  const [device, setDevice] = useState<'m' | 'd' | 'unset'>('unset');

  const [state] = useContext(LifeContext);
  const { readIndex } = state;

  useEffect(() => {
    const resize = () => {
      setDevice(window.innerWidth > 768 ? 'd' : 'm');
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  const video = useMemo(() => {
    if (data.video.type === 'video') {
      return data.video;
    } else {
      if (readIndex === index) {
        return data.video;
      }
    }
    return null;
  }, [readIndex, index, data.video]);

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
                  <div id='videoContainer' className='absolute bottom-0 left-0 right-0 top-0'>
                    {video}
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
