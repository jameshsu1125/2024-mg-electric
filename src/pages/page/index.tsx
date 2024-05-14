import { memo, useEffect } from 'react';
import './index.less';
import Landing from './landing';
import Years from './year';
import Life from './life';

const Page = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Page'>
      <Landing />
      <Years />
      <Life />
    </div>
  );
});
export default Page;
