import { memo, useEffect } from 'react';
import Battery from './battery';
import './index.less';
import Landing from './landing';
import Life from './life';
import Movement from './movement';
import Safety from './safety';
import Year from './year';

const Page = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Page'>
      <Landing />
      <Year />
      <Life />
      <Movement />
      {/* <Safety />
      <Battery /> */}
    </div>
  );
});
export default Page;
