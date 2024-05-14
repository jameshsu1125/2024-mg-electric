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
      <>
        {data.body.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </>
    );
  }, [data.body, device]);

  return (
    <div className='flex w-full'>
      <Article>
        <div className='Slide flex w-full'>
          {device === 'mobile' && (
            <div className='w-full'>
              <div className='carousel-headline'>
                <h1 className='font-mxThin font-thin tracking-widest'>{data.headline}</h1>
                <h2 className='font-mxBook'>{data.subline}</h2>
              </div>
            </div>
          )}
          <div className='image'>
            <div className={twMerge('video h-full w-full', `v${index}`)}></div>
          </div>
          <div className='content flex h-[337px] flex-1 flex-col items-start justify-center space-y-10'>
            {device === 'desktop' && (
              <div className='w-full'>
                <div className='carousel-headline'>
                  <h1 className='font-mxThin font-thin tracking-widest'>{data.headline}</h1>
                  <h2 className='font-mxBook'>{data.subline}</h2>
                </div>
              </div>
            )}
            <div className='carousel-content'>
              {body}
              {data.postscript !== '' && <p className='postscript'>{data.postscript}</p>}
            </div>
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Slide;
