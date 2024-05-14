import Article from '@/components/article';
import { memo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import './index.less';
import 'swiper/css';
import Slide from './slide';

const Life = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Life'>
      <Article>
        <Swiper
          spaceBetween={50}
          slidesPerView={1}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>
            <Slide />
          </SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </Swiper>
      </Article>
    </div>
  );
});
export default Life;
