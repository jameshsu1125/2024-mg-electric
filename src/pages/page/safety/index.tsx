import { memo, useEffect, useState } from 'react';
import Button from './button';
import { SafetyConfig } from './config';
import Dialog from './dialog';
import './index.less';
import { useInView } from 'react-intersection-observer';
import useMedia, { MediaType } from '@/hooks/useMedia';
import useTween from 'lesca-use-tween';

const H1 = ({ inView, device }: { inView: boolean; device: MediaType }) => {
  const [style, setStyle] = useTween({ letterSpacing: '2rem' });

  useEffect(() => {
    if (inView) setStyle({ letterSpacing: '0.2rem' }, { duration: 5000 });
    else setStyle({ letterSpacing: '2rem' }, 100);
  }, [inView]);

  return <h1 style={style}>MSP純電模組平台{device < MediaType.SM ? <br /> : ' '}兼具空間與安全</h1>;
};

const Safety = memo(() => {
  const { ref, inView } = useInView({
    threshold: 0,
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
        <H1 inView={inView} device={device} />
      </div>
    </div>
  );
});
export default Safety;
