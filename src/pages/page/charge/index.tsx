import Article from '@/components/article';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo, useEffect, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { ChargeConfig } from './config';
import './index.less';
import useTween from 'lesca-use-tween';

const Dialog = memo(
  ({
    device,
    item,
    setState,
  }: {
    device: MediaType;
    item: (typeof ChargeConfig)[number];
    setState: React.Dispatch<React.SetStateAction<boolean>>;
  }) => {
    const [style, setStyle] = useTween({ opacity: 0, y: device < MediaType.SM ? -50 : 50 });

    useEffect(() => {
      setStyle({ opacity: 1, y: 0 }, 500);
    }, []);

    return (
      <div className='dialog' style={style}>
        {device < MediaType.SM && (
          <div className={twMerge('flex w-full justify-center pt-1')}>
            <button className='text-[#cacaca] hover:text-primary' onClick={() => setState(false)}>
              <IoCloseCircle className='h-3 w-3 sm:h-6 sm:w-6' />
            </button>
          </div>
        )}
        <h3>{item.dialog.headline}</h3>
        <p>{item.dialog.body}</p>
        {device >= MediaType.SM && (
          <div className={twMerge('flex w-full justify-center pb-3')}>
            <button className='text-[#cacaca] hover:text-primary' onClick={() => setState(false)}>
              <IoCloseCircle className='h-4 w-4 sm:h-6 sm:w-6' />
            </button>
          </div>
        )}
      </div>
    );
  },
);

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
        {state && <Dialog device={device} item={item} setState={setState} />}
      </div>
    </div>
  );
});

const Charge = memo(() => (
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
));
export default Charge;
