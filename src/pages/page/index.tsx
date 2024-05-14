import { memo, useEffect } from 'react';
import './index.less';
import Landing from './landing';

const Page = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Page'>
      <Landing />
    </div>
  );
});
export default Page;
