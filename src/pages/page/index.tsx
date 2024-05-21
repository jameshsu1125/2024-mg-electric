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
import Application from './application';
import Service from './service';
import QA from './qa';

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
        <Application />
        <Service />
        <QA />
      </div>
    </div>
  );
});
export default Page;
