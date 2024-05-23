import Article from '@/components/article';
import useMedia, { MediaType } from '@/hooks/useMedia';
import { memo, useContext, useEffect, useState } from 'react';
import { IoIosArrowDropdown } from 'react-icons/io';
import { IoCloseCircle } from 'react-icons/io5';
import { twMerge } from 'tailwind-merge';
import { ChargeConfig, ChargeContext, ChargeState, TChargeState } from './config';
import './index.less';
import useTween from 'lesca-use-tween';
import { useInView } from 'react-intersection-observer';

const Dialog = memo(
  ({
    device,
    item,
    setState,
  }: {
    device: MediaType;
    item: (typeof ChargeConfig)[number];
    setState: React.Dispatch<React.SetStateAction<TChargeState>>;
  }) => {
    const [style, setStyle] = useTween({ opacity: 0, y: device < MediaType.SM ? -50 : 50 });

    useEffect(() => {
      setStyle({ opacity: 1, y: 0 }, 500);
    }, []);

    return (
      <div className='dialog' style={style}>
        {device < MediaType.SM && (
          <div className={twMerge('flex w-full justify-center pt-1')}>
            <button
              className='text-[#cacaca] hover:text-primary'
              onClick={() => setState((S) => ({ ...S, index: undefined }))}
            >
              <IoCloseCircle className='h-3 w-3 sm:h-6 sm:w-6' />
            </button>
          </div>
        )}
        <div className='w-full'>
          <h3>{item.dialog.headline}</h3>
          <p>{item.dialog.body}</p>
        </div>
        {device >= MediaType.SM && (
          <div className={twMerge('flex w-full justify-center pb-3')}>
            <button
              className='text-[#cacaca] hover:text-primary'
              onClick={() => setState((S) => ({ ...S, index: undefined }))}
            >
              <IoCloseCircle />
            </button>
          </div>
        )}
      </div>
    );
  },
);

const Item = memo(({ item, index }: { item: (typeof ChargeConfig)[number]; index: number }) => {
  const [device] = useMedia();
  const [state, setState] = useContext(ChargeContext);

  return (
    <div className='item'>
      <div className={`ico i${index}`} />
      <div className='relative w-full'>
        <button onClick={() => setState((S) => ({ ...S, index }))}>
          READ MORE
          <IoIosArrowDropdown className='ml-1' />
        </button>
        {state.index === index && <Dialog device={device} item={item} setState={setState} />}
      </div>
    </div>
  );
});

const Image = ({ inView }: { inView: boolean }) => {
  const [style, setStyle] = useTween({ scale: 1.5, borderWidth: 50 });

  useEffect(() => {
    if (inView) setStyle({ scale: 1, borderWidth: 0 }, { duration: 5000 });
    else setStyle({ scale: 1.5, borderWidth: 50 }, 100);
  }, [inView]);

  return (
    <div className='relative w-full overflow-hidden'>
      <div style={{ transform: style.transform }} className='image' />
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

  return <h1 style={style}>多元充電 全面佈局</h1>;
};

const Charge = memo(() => {
  const value = useState(ChargeState);
  const { inView, ref } = useInView({ threshold: 0 });

  return (
    <div ref={ref} className='Charge'>
      <ChargeContext.Provider value={value}>
        <Article>
          <Image inView={inView} />
          <div className='content'>
            <H1 inView={inView} />
            <div className='ctx'>
              {ChargeConfig.map((item, index) => (
                <Item key={item.title} item={item} index={index} />
              ))}
            </div>
          </div>
        </Article>
      </ChargeContext.Provider>
    </div>
  );
});
export default Charge;
