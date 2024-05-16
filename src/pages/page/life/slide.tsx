import Article from '@/components/article';
import { Context } from '@/settings/constant';
import { ActionType } from '@/settings/type';
import { memo, useContext, useMemo } from 'react';
import { twMerge } from 'tailwind-merge';
import { LifeCarousel } from './config';
import './slide.less';

const Slide = memo(({ index, data }: { index: number; data: (typeof LifeCarousel)[number] }) => {
  const [context] = useContext(Context);
  const device = context[ActionType.Device];

  const body = useMemo(() => {
    if (device === 'mobile') {
      return <p>{data.body.join('')}</p>;
    }
    return (
      <p>
        {data.body.map((text) => (
          <span key={text}>{text}</span>
        ))}
      </p>
    );
  }, [data.body, device]);

  return (
    <div className='flex w-full'>
      <Article>
        <div className='Slide'>
          {device === 'mobile' && (
            <div className='w-full'>
              <div className='carousel-headline'>
                <h1>{data.headline}</h1>
                <h2 className='font-mxBook'>{data.subline}</h2>
              </div>
            </div>
          )}
          <div className='image'>
            <div className={twMerge('video', `v${index}`)}></div>
          </div>
          <div className='content'>
            {device === 'desktop' && (
              <div className='w-full'>
                <div className='carousel-headline'>
                  <h1>{data.headline}</h1>
                  <h2>{data.subline}</h2>
                </div>
              </div>
            )}
            <div className='carousel-content'>
              {body}
              {data.postscript !== '' && <div className='postscript'>{data.postscript}</div>}
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Slide;
