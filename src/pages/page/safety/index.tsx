import { memo, useState } from 'react';
import Button from './button';
import { SafetyConfig } from './config';
import Dialog from './dialog';
import './index.less';

const Safety = memo(() => {
  const [clickIndex, setClickIndex] = useState<number | undefined>();

  return (
    <div className='Safety'>
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
    </div>
  );
});
export default Safety;
