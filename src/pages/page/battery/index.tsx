import { memo } from 'react';
import './index.less';
import Section1 from './section1';
import Section2 from './section2';

const Battery = memo(() => (
  <div className='Battery'>
    <Section1 />
    <Section2 />
  </div>
));
export default Battery;
