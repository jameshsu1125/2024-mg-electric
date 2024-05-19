import { memo, useEffect } from 'react';
import './form.less';
import Article from '@/components/article';

const Form = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Form'>
      <Article expend>
        <div className='flex w-full justify-center'>
          <div className='w-full max-w-[800px]'>
            <div className='image' />
          </div>
        </div>
      </Article>
    </div>
  );
});
export default Form;
