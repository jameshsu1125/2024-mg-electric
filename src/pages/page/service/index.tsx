import { memo, useEffect } from 'react';
import './index.less';
import Article from '@/components/article';

const Service = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Service'>
      <Article>
        <div className='flex w-full flex-col items-center justify-center sm:space-y-10'>
          <div className='headline'>
            <div className='img' />
          </div>
          <div className='content'>
            <div className='circle' />
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Service;
