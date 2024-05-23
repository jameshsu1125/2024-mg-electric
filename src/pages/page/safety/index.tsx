import { memo, useState } from 'react';
import Button from './button';
import { SafetyConfig } from './config';
import Dialog from './dialog';
import './index.less';
import { useInView } from 'react-intersection-observer';
import useMedia, { MediaType } from '@/hooks/useMedia';

const Safety = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });

  const [clickIndex, setClickIndex] = useState<number | undefined>();
  const [device] = useMedia();

  return (
    <div ref={ref} className='Safety'>
      <div className='bg'>
        <div>
          <div className='h-full w-full'>
            {SafetyConfig.map((data, index) => (
              <Button
                key={data.name}
                data={data}
                onClick={(i) => setClickIndex(i)}
                index={index}
                clickIndex={clickIndex}
                inView={inView}
              />
            ))}
          </div>
          <div className='absolute left-0 top-0 h-full w-full'>
            {SafetyConfig.map((data, index) => (
              <Dialog
                key={data.title}
                data={data}
                index={index}
                clickIndex={clickIndex}
                onClick={() => setClickIndex(undefined)}
              />
            ))}
          </div>
        </div>
      </div>
      <div className='headline'>
        <h1>MSP純電模組平台{device < MediaType.SM ? <br /> : ' '}兼具空間與安全</h1>
      </div>
    </div>
  );
});
export default Safety;
