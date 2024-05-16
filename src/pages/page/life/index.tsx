import { memo, useRef } from 'react';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { twMerge } from 'tailwind-merge';
import { LifeCarousel } from './config';
import './index.less';
import Slide from './slide';

type TArrowProps = {
  direct: 'next' | 'prev';
  onClick: () => void;
};

const Arrow = memo(({ direct, onClick }: TArrowProps) => {
  return (
    <button
      onClick={onClick}
      className={twMerge('Arrow', direct === 'next' ? 'flap right-0' : 'left-0')}
    ></button>
  );
});

const Life = memo(() => {
  const ref = useRef<SwiperRef>(null);
  return (
    <div className='Life'>
      <Swiper ref={ref} spaceBetween={0} speed={800} loop={true}>
        {LifeCarousel.map((data, index) => (
          <SwiperSlide key={`${data.body}${index}`}>
            <Slide index={index} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Arrow direct='prev' onClick={() => ref.current?.swiper.slidePrev()} />
      <Arrow direct='next' onClick={() => ref.current?.swiper.slideNext()} />
    </div>
  );
});
export default Life;
