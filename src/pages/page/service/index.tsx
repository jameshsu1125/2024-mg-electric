import Article from '@/components/article';
import { memo } from 'react';
import './index.less';

const Service = memo(() => (
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
));
export default Service;
