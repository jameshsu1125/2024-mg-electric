import { memo, useEffect } from 'react';
import Battery from './battery';
import './index.less';
import Landing from './landing';
import Life from './life';
import Movement from './movement';
import Safety from './safety';
import Year from './year';
import Charge from './charge';
import Flow from './flow';
import Modus from './modus';

const Page = memo(() => {
  useEffect(() => {}, []);
  return (
    <div className='Page'>
      <Landing />
      <Year />
      <Life />
      <Movement />
      <Safety />
      <Battery />
      <Charge />
      <div className='common-bg'>
        <Flow />
        <Modus />
      </div>
    </div>
  );
});
export default Page;
