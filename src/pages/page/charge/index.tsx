import { memo, useEffect, useState } from 'react';
import './index.less';
import Article from '@/components/article';
import { ChargeConfig } from './config';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { twMerge } from 'tailwind-merge';

const Item = memo(({ item, index }: { item: (typeof ChargeConfig)[number]; index: number }) => {
  const [device] = useMedia();
  const [state, setState] = useState(false);
  return (
    <div className='item'>
      <div className={`ico i${index}`} />
      <div className='relative w-full'>
        <button onClick={() => setState((S) => !S)}>
          READ MORE
          <IoIosArrowDropdown className='ml-1' />
        </button>
        {state && (
          <div className='dialog'>
            {device < MediaType.SM && (
              <div className={twMerge('flex w-full justify-center pt-1')}>
                <button
                  className='text-[#cacaca] hover:text-primary'
                  onClick={() => setState(false)}
                >
                  <IoCloseCircle className='h-3 w-3 sm:h-6 sm:w-6' />
                </button>
              </div>
            )}
            <h3>{item.dialog.headline}</h3>
            <p>{item.dialog.body}</p>
            {device >= MediaType.SM && (
              <div className={twMerge('flex w-full justify-center pb-3')}>
                <button
                  className='text-[#cacaca] hover:text-primary'
                  onClick={() => setState(false)}
                >
                  <IoCloseCircle className='h-4 w-4 sm:h-6 sm:w-6' />
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
});

const Charge = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Charge'>
      <Article>
        <div className='w-full'>
          <div className='image' />
        </div>
        <div className='content'>
          <h1>多元充電 全面佈局</h1>
          <div className='ctx'>
            {ChargeConfig.map((item, index) => (
              <Item key={item.title} item={item} index={index} />
            ))}
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Charge;
