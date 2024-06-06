import Article from '@/components/article';
import { memo } from 'react';
import './form.less';

const Form = memo(() => (
  <div className='Form'>
    <Article expend>
      <div className='flex w-full justify-center'>
        <div className='w-full max-w-[1100px]'>
          <div className='image' />
        </div>
      </div>
    </Article>
  </div>
));
export default Form;
