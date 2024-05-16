import { memo, useEffect } from 'react';
import './index.less';
import Landing from './landing';
import Year from './year';
import Life from './life';
import Movement from './movement';
import Safety from './safety';

const Page = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Page'>
      <Landing />
      <Year />
      <Life />
      <Movement />
      <Safety />
    </div>
  );
});
export default Page;
