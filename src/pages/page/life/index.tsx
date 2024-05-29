import { memo, useEffect, useRef, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';
import { LifeCarousel, LifeContext, LifeState } from './config';
import './index.less';
import Slide from './slide';

type TArrowProps = {
  direct: 'next' | 'prev';
  onClick: () => void;
  top: number;
};

const Arrow = memo(({ direct, onClick, top }: TArrowProps) => {
  const ref = useRef<HTMLButtonElement>(null);
  return (
    <button
      ref={ref}
      onClick={onClick}
      style={{ top: `${top}px` }}
      className={twMerge('Arrow', direct === 'next' ? 'flap right-0' : 'left-0')}
    />
  );
});

const Life = memo(() => {
  const rootRef = useRef<HTMLDivElement>(null);
  const ref = useRef<SwiperRef>(null);
  const [state, setState] = useState(LifeState);
  const [top, setTop] = useState(0);

  useEffect(() => {
    const resize = () => {
      if (rootRef.current) {
        const [dom] = document.getElementsByTagName('video');
        if (dom) {
          const btnHeight = window.innerWidth > 768 ? 20 : 12;
          const root = rootRef.current;
          const h = dom?.clientHeight / 2;
          const y = dom.getClientRects()[0].y - root.getClientRects()[0].y;
          setTop(y + h - btnHeight);
        }
      }
    };
    resize();
    window.addEventListener('resize', resize);
    return () => window.removeEventListener('resize', resize);
  }, []);

  return (
    <div ref={rootRef} className='Life'>
      <LifeContext.Provider value={[state, setState]}>
        <Swiper
          ref={ref}
          spaceBetween={0}
          speed={800}
          loop={true}
          onSlideChange={(e) => setState((S) => ({ ...S, index: e.realIndex }))}
        >
          {LifeCarousel.map((data, index) => (
            <SwiperSlide key={`${data.body}${index}`}>
              <Slide index={index} data={data} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Arrow direct='prev' onClick={() => ref.current?.swiper.slidePrev()} top={top} />
        <Arrow direct='next' onClick={() => ref.current?.swiper.slideNext()} top={top} />
      </LifeContext.Provider>
    </div>
  );
});
export default Life;
