import { memo, useEffect } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.less';
import Slide from './slide';
import { twMerge } from 'tailwind-merge';
import { LifeCarousel } from './config';

const Arrow = memo(({ direct }: { direct: 'next' | 'prev' }) => {
  return (
    <button className={twMerge('Arrow', direct === 'next' ? 'flap right-0' : 'left-0')}></button>
  );
});

const Life = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Life'>
      <Arrow direct='prev' />
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        loop={true}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        {LifeCarousel.map((data, index) => (
          <SwiperSlide key={`${data.body}${index}`}>
            <Slide index={index} data={data} />
          </SwiperSlide>
        ))}
      </Swiper>
      <Arrow direct='next' />
    </div>
  );
});
export default Life;
